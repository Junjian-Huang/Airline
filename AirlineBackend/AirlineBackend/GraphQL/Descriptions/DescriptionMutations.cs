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

namespace AirlineBackend.GraphQL.Descriptions
{
    [ExtendObjectType(name: "Mutation")]
    public class DescriptionMutations
    {
        [UseAppDbContext]
        [Authorize]
        public async Task<Description> AddDescriptionAsync(AddDescriptionInput input, ClaimsPrincipal claimsPrincipal,
        [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraftIdStr = claimsPrincipal.Claims.First(c => c.Type == "aircraftId").Value;

            var description = new Description
            {
                Content = input.Content,
                AirlineId = int.Parse(input.AirlineId),
                AircraftId = int.Parse(aircraftIdStr),
                Modified = DateTime.Now,
                Created = DateTime.Now,
            };
            context.Descriptions.Add(description);

            await context.SaveChangesAsync(cancellationToken);

            return description;
        }

        [UseAppDbContext]
        [Authorize]
        public async Task<Description> EditDescriptionAsync(EditDescriptionInput input, ClaimsPrincipal claimsPrincipal,
                [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var aircraftIdStr = claimsPrincipal.Claims.First(c => c.Type == "aircraftId").Value;

            var description = await context.Descriptions.FindAsync(int.Parse(input.DescriptionId));

            if (description.AircraftId != int.Parse(aircraftIdStr))
            {
                throw new GraphQLRequestException(ErrorBuilder.New()
                    .SetMessage("Not owned by student")
                    .SetCode("AUTH_NOT_AUTHORIZED")
                    .Build());
            }

            description.Content = input.Content ?? description.Content;
            context.Descriptions.Add(description);

            await context.SaveChangesAsync(cancellationToken);

            return description;
        }
    }
}
