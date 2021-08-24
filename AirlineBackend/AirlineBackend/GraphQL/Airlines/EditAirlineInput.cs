
using HotChocolate;
using HotChocolate.Types;

namespace AirlineBackend.GraphQL.Airlines
{
    public record EditAirlineInput(

        [property: GraphQLType(typeof(NonNullType<IdType>))]
        string AirlineId,

        string AircraftId,

        string? Departure,
        string? Destination,
        string? Name,
        string? Country);

}
