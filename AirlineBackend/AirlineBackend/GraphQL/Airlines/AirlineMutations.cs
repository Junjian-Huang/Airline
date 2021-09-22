using AirlineBackend.Data;
using AirlineBackend.Extensions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Airlines
{
    [ExtendObjectType(name: "Mutation")]
    public class AirlineMutations
    {
        [UseAppDbContext]
        [Authorize]
        public async Task<Airline> AddAirlineAsync(AddAirlineInput input, ClaimsPrincipal claimsPrincipal,
            [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraftIdStr = claimsPrincipal.Claims.First(c => c.Type == "aircraftId").Value;

            var airline = new Airline
            {
                Name = input.Name,
                Departure = input.Departure,
                Destination = input.Destination,
                Country = (Country)Enum.Parse(typeof(Country), input.Country),
                AircraftId = int.Parse(aircraftIdStr),
                //AircraftId = int.Parse(input.AircraftId),
                Modified = DateTime.Now,
                Created = DateTime.Now,
            };
            context.Airlines.Add(airline);

            await context.SaveChangesAsync(cancellationToken);

            return airline;
        }



        [UseAppDbContext]
        [Authorize]
        public async Task<Airline> EditAirlineAsync(EditAirlineInput input, ClaimsPrincipal claimsPrincipal,
            [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraftIdStr = claimsPrincipal.Claims.First(c => c.Type == "aircraftId").Value;

            var airline = await context.Airlines.FindAsync(int.Parse(input.AirlineId));

            //airline.AircraftId = int.Parse(input.AircraftId);// jjh add to modify existence airline's craftId

            if (airline.AircraftId != int.Parse(aircraftIdStr))
            {
                throw new GraphQLRequestException(ErrorBuilder.New()
                    .SetMessage("Not owned by aircraft")
                    .SetCode("AUTH_NOT_AUTHORIZED")
                    .Build());
            }

            airline.Name = input.Name ?? airline.Name;
            airline.Departure = input.Departure ?? airline.Departure;
            airline.Destination = input.Destination ?? airline.Destination;
            airline.Modified = DateTime.Now;

            context.Airlines.Add(airline);
            await context.SaveChangesAsync(cancellationToken);

            return airline;
        }
    }
}
