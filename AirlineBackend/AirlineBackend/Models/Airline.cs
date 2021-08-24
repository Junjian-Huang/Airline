using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.Models
{
    public enum Country
    {
        NZ
    }

    public class Airline
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Departure { get; set; } = default!;

        [Required]
        public string Destination { get; set; } = default!;

        [Required]
        public string Name { get; set; } = default!;

        [Required]
        public Country Country { get; set; }

        [Required]
        public int AircraftId { get; set; }

        public Aircraft Aircraft { get; set; } = default!;

        public DateTime Modified { get; set; }

        public DateTime Created { get; set; }

        public ICollection<Description> Descriptions { get; set; } = new List<Description>();
    }
}
