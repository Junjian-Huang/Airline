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

namespace AirlineBackend.GraphQL.Aircrafts
{
    [ExtendObjectType(name: "Mutation")]
    public class AircraftMutations
    {
        [UseAppDbContext]
        public async Task<Aircraft> AddAircraftAsync(AddAircraftInput input,
        [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraft = new Aircraft
            {
                Type = input.Type,
                GitHub = input.GitHub,
                ImageURL = input.ImageURL,
            };

            context.Aircrafts.Add(aircraft);
            await context.SaveChangesAsync(cancellationToken);

            return aircraft;
        }

        [UseAppDbContext]
        public async Task<Aircraft> EditAircraftAsync(EditAircraftInput input,
                [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraft = await context.Aircrafts.FindAsync(int.Parse(input.Id));

            aircraft.Type = input.Type ?? aircraft.Type;
            //student.GitHub = input.GitHub ?? student.GitHub;
            aircraft.ImageURL = input.ImageURL ?? aircraft.ImageURL;

            await context.SaveChangesAsync(cancellationToken);

            return aircraft;
        }
    }
}
