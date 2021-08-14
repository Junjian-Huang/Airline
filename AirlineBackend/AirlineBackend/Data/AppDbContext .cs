using AirlineBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Aircraft> Aircrafts { get; set; }
        public DbSet<Airline> Airlines { get; set; }
        public DbSet<Description> Descriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Airline>()
                .HasOne(line => line.Aircraft)
                .WithMany(craft => craft.Airlines)
                .HasForeignKey(line => line.AircraftId);

            modelBuilder.Entity<Description>()
                .HasOne(descri => descri.Aircraft)
                .WithMany(craft => craft.Descriptions)
                .HasForeignKey(descri => descri.AircraftId)
                .OnDelete(DeleteBehavior.NoAction); //Microsoft SQL Server doesn't support multiple cascades on one table.
                                                    //will not be removing any Aircrafts/Airlines, disable cascade (remove when a parent is removed).

            modelBuilder.Entity<Description>()
                .HasOne(descri => descri.Airline)
                .WithMany(line => line.Descriptions)
                .HasForeignKey(descri => descri.AirlineId);
        }

    }
}
