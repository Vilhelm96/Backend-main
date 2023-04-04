using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Common;

namespace ApiPractice.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            :base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Player> Players { get; set; }
    }
}
