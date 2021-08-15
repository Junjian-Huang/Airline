using AirlineBackend.Data;
using AirlineBackend.Extensions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Airlines
{
    [ExtendObjectType(name: "Mutation")]
    public class AirlineMutations
    {
        [UseAppDbContext]
        public async Task<Airline> AddAirlineAsync(AddAirlineInput input,
            [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var airline = new Airline
            {
                Name = input.Name,
                Departure = input.Departure,
                Destination = input.Destination,
                Country = (Country)Enum.Parse(typeof(Country), input.Country),
                AircraftId = int.Parse(input.AircraftId),
                Modified = DateTime.Now,
                Created = DateTime.Now,
            };
            context.Airlines.Add(airline);

            await context.SaveChangesAsync(cancellationToken);

            return airline;
        }

        [UseAppDbContext]
        public async Task<Airline> EditAirlineAsync(EditAirlineInput input,
            [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var airline = await context.Airlines.FindAsync(int.Parse(input.AirlineId));

            airline.Name = input.Name ?? airline.Name;
            airline.Departure = input.Departure ?? airline.Departure;
            airline.Destination = input.Destination ?? airline.Destination;
            airline.Modified = DateTime.Now;

            await context.SaveChangesAsync(cancellationToken);

            return airline;
        }
    }
}
