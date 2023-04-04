using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiPractice.Models;

namespace ApiPractice.Models.Repository
{
    public interface IPlayerRepository
    {
        Task<IEnumerable<Player>> Get();
        Task<Player> Get(int id);
        Task<Player> Create(Player player);
        Task Update(Player player);
        Task Delete(int id);

    }
}
