using HotChocolate;
using HotChocolate.Types;

namespace AirlineBackend.GraphQL.Descriptions
{
    public record EditDescriptionInput
    (
        [GraphQLType(typeof(NonNullType<IdType>))]
        string DescriptionId,
        string? Content);
}
