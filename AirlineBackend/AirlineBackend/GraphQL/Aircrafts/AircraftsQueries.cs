using AirlineBackend.Data;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Aircrafts
{
    [ExtendObjectType(name: "Query")]
    public class AircraftsQueries
    {
        public IQueryable<Aircraft> GetAircrafts([ScopedService] AppDbContext context)
        {
            return context.Aircrafts;
        }
    }
}
