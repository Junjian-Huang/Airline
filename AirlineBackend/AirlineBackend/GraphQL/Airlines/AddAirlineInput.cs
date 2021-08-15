
namespace AirlineBackend.GraphQL.Airlines
{
    public record AddAirlineInput(
        string Departure,
        string Destination,
        string Name,
        string Country,
        string AircraftId);
}
