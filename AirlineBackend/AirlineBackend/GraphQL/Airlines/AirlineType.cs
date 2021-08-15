using System.Threading;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using AirlineBackend.Data;
using AirlineBackend.Models;
using AirlineBackend.GraphQL.Aircrafts;
using AirlineBackend.GraphQL.Descriptions;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace AirlineBackend.GraphQL.Airlines
{
    public class AirlineType : ObjectType<Airline>
    {
        protected override void Configure(IObjectTypeDescriptor<Airline> descriptor)
        {
            descriptor.Field(line => line.Id).Type<NonNullType<IdType>>();
            descriptor.Field(line => line.Departure).Type<NonNullType<StringType>>();
            descriptor.Field(line => line.Destination).Type<NonNullType<StringType>>();
            descriptor.Field(line => line.Name).Type<NonNullType<StringType>>();
            descriptor.Field(line => line.Country).Type<NonNullType<EnumType<Country>>>();

            descriptor
                .Field(line => line.Aircraft)
                .ResolveWith<Resolvers>(r => r.GetAircraft(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<AircraftType>>();

            descriptor
                .Field(line => line.Descriptions)
                .ResolveWith<Resolvers>(r => r.GetDescriptions(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<ListType<NonNullType<DescriptionType>>>>();

            descriptor.Field(p => p.Modified).Type<NonNullType<DateTimeType>>();
            descriptor.Field(p => p.Created).Type<NonNullType<DateTimeType>>();

        }

        private class Resolvers
        {
            public async Task<Aircraft> GetAircraft(Airline airline, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Aircrafts.FindAsync(new object[] { airline.AircraftId }, cancellationToken);
            }

            public async Task<IEnumerable<Description>> GetDescriptions(Airline airline, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Descriptions.Where(descri => descri.AirlineId == airline.Id).ToArrayAsync(cancellationToken);
            }
        }
    }
}
