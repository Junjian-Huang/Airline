
namespace AirlineBackend.GraphQL.Descriptions
{
    public record AddDescriptionInput
    (
        string Content,
        string AirlineId,
        string AircraftId);
}
