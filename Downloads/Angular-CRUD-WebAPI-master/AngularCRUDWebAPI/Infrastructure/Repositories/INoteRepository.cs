using AngularCRUDWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    interface INoteRepository:IRepository<Note>
    {
        Task<IEnumerable<Note>> ListAsync();
        Note Add(Note entity);    
    }
}
