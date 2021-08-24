using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.Models
{
    public class Description
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; } = default!;

        [Required]
        public int AirlineId { get; set; }

        public Airline Airline { get; set; } = default!;

        [Required]
        public int AircraftId { get; set; }

        public Aircraft Aircraft { get; set; } = default!;

        public DateTime Modified { get; set; }

        public DateTime Created { get; set; }

    }
}
