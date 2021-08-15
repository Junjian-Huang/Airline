using AirlineBackend.Data;
using AirlineBackend.GraphQL.Airlines;
using AirlineBackend.GraphQL.Descriptions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Aircrafts
{
    public class AircraftType : ObjectType<Aircraft>
    {
        protected override void Configure(IObjectTypeDescriptor<Aircraft> descriptor)
        {
            descriptor.Field(c => c.Id).Type<NonNullType<IdType>>();
            descriptor.Field(c => c.Type).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.GitHub).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.ImageURL).Type<NonNullType<StringType>>();

            descriptor
                .Field(craft => craft.Airlines)
                .ResolveWith<Resolvers>(r => r.GetAirlines(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<ListType<NonNullType<AirlineType>>>>();
                // Field
                // Calling a resolver (default just means passing in a same value as parent)
                // Call AppDbContext for a new DbContext
                // Set Type


            descriptor
                .Field(craft => craft.Descriptions)
                .ResolveWith<Resolvers>(r => r.GetDescriptions(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<ListType<NonNullType<DescriptionType>>>>();
        }

        private class Resolvers
        {
            public async Task<IEnumerable<Airline>> GetAirlines(Aircraft aircraft, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Airlines.Where(line => line.AircraftId == aircraft.Id).ToArrayAsync(cancellationToken);
            }

            public async Task<IEnumerable<Description>> GetDescriptions(Aircraft aircraft, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Descriptions.Where(descri => descri.AircraftId == aircraft.Id).ToArrayAsync(cancellationToken);
            }
        }
    }
}
