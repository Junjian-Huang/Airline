using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.GraphQL.Descriptions
{
    public record EditDescriptionInput
    (
        string DescriptionId,
        string? Content);
}
