namespace AirlineBackend.GraphQL.Aircrafts
{
    public record AddAircraftInput(
        string Type,
        string GitHub,
        string? ImageURL);
}
