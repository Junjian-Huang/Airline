
namespace AirlineBackend.GraphQL.Airlines
{
    public record EditAirlineInput(
        string AirlineId,

        string AircraftId,

        string? Departure,
        string? Destination,
        string? Name,
        string? Country);

}
