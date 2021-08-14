using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.Models
{
    public class Aircraft
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string GitHub { get; set; }

        public string ImageURL { get; set; }

        public ICollection<Airline> Airlines { get; set; } = new List<Airline>();

        public ICollection<Description> Descriptions { get; set; } = new List<Description>();
    }
}
