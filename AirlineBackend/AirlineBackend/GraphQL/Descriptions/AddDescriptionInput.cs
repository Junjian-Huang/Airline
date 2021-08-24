
using HotChocolate;
using HotChocolate.Types;

namespace AirlineBackend.GraphQL.Descriptions
{
    public record AddDescriptionInput
    (
        string Content,
        [GraphQLType(typeof(NonNullType<IdType>))]
        string AirlineId
        );
}
// string AircraftId,     remove this attribute because GitHub Oauth step 8 in back end
