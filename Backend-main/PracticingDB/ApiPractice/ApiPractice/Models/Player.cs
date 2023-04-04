using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiPractice.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public Role Role { get; set; }
    }
    public enum Role { 
        Goalkeeper = 0,
        Defender = 1,
        Midfielder = 2,
        Striker = 3
    }
}
