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

namespace AirlineBackend.GraphQL.Descriptions
{
    [ExtendObjectType(name: "Mutation")]
    public class DescriptionMutations
    {
        [UseAppDbContext]
        public async Task<Description> AddDescriptionAsync(AddDescriptionInput input,
        [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var description = new Description
            {
                Content = input.Content,
                AirlineId = int.Parse(input.AirlineId),
                AircraftId = int.Parse(input.AircraftId),
                Modified = DateTime.Now,
                Created = DateTime.Now,
            };
            context.Descriptions.Add(description);

            await context.SaveChangesAsync(cancellationToken);

            return description;
        }

        [UseAppDbContext]
        public async Task<Description> EditDescriptionAsync(EditDescriptionInput input,
                [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var description = await context.Descriptions.FindAsync(int.Parse(input.DescriptionId));
            description.Content = input.Content ?? description.Content;

            await context.SaveChangesAsync(cancellationToken);

            return description;
        }
    }
}
