using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Infrastructure.Repositories
{
    public class VenueRepository:IRepository<Note>
    {
        private readonly Context _context;

        public IUnitOfWork UnitOfWork => _context;

       
        public VenueRepository(Context context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }


        public async Task<Note> GetAsync(int id)
        {
            return await _context.Note.FindAsync(id);
        }

        public async Task<IEnumerable<Note>> ListAsync()
        {
            return await _context.Note.ToListAsync();
        }
           


        public Note Add(Note entity)
        {
             return _context.Note.Add(entity).Entity;
            
        }
        
    }
}
