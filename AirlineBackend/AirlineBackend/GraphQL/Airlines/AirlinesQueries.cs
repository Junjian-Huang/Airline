using AirlineBackend.Data;
using AirlineBackend.Extensions;
using AirlineBackend.Models;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Airlines
{
    [ExtendObjectType(name: "Query")]
    public class AirlinesQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Airline> GetAirlines([ScopedService] AppDbContext context)
        {
            return context.Airlines.OrderBy(line => line.Created);
        }


        [UseAppDbContext]
        public Airline GetAirline([GraphQLType(typeof(NonNullType<IdType>))] string id, [ScopedService] AppDbContext context)
        {
            return context.Airlines.Find(int.Parse(id));
        }
    }
}
