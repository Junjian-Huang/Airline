using AirlineBackend.Models;

namespace AirlineBackend.GraphQL.Aircrafts
{
    public record LoginPayload(
        Aircraft aircraft,
        string jwt);
}
