
namespace AirlineBackend.GraphQL.Airlines
{
    public record EditAirlineInput(
        string AirlineId,
        string? Departure,
        string? Destination,
        string? Name,
        string? Country);

}
