using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using HotChocolate;
using HotChocolate.Types;
using AirlineBackend.Data;
using AirlineBackend.Models;
using AirlineBackend.GraphQL.Airlines;

namespace AirlineBackend.GraphQL.Descriptions
{
    public class DescriptionType : ObjectType<Description>
    {
        protected override void Configure(IObjectTypeDescriptor<Description> descriptor)
        {
            descriptor.Field(descri => descri.Id).Type<NonNullType<IdType>>();
            descriptor.Field(descri => descri.Content).Type<NonNullType<StringType>>();

            descriptor
                .Field(descri => descri.Airline)
                .ResolveWith<Resolvers>(r => r.GetAirline(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<DescriptionType>>();

            descriptor
                .Field(descri => descri.Aircraft)
                .ResolveWith<Resolvers>(r => r.GetAircraft(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<DescriptionType>>();

            descriptor.Field(descri => descri.Modified).Type<NonNullType<DateTimeType>>();
            descriptor.Field(descri => descri.Created).Type<NonNullType<DateTimeType>>();

        }

        private class Resolvers
        {
            public async Task<Airline> GetAirline(Description description, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Airlines.FindAsync(new object[] { description.AirlineId }, cancellationToken);
            }

            public async Task<Aircraft> GetAircraft(Description description, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Aircrafts.FindAsync(new object[] { description.AircraftId }, cancellationToken);
            }
        }
    }
}
