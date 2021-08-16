using AirlineBackend.Data;
using AirlineBackend.Extensions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Aircrafts
{
    [ExtendObjectType(name: "Query")]
    public class AircraftsQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Aircraft> GetAircrafts([ScopedService] AppDbContext context)
        {
            return context.Aircrafts;
        }


        [UseAppDbContext]
        public Aircraft GetAircraft(int id, [ScopedService] AppDbContext context)
        {
            return context.Aircrafts.Find(id);
        }


        [UseAppDbContext]
        [Authorize]
        public Aircraft GetSelf(ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context)
        {
            var aircraftIdStr = claimsPrincipal.Claims.First(c => c.Type == "aircraftId").Value;

            return context.Aircrafts.Find(int.Parse(aircraftIdStr));
        }

    }
}
