using System.Threading;
using System.Threading.Tasks;
using AngularCRUDWebAPI.Infrastructure.EntityConfigurations;
using AngularCRUDWebAPI.Infrastructure.Repositories;
using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularCRUDWebAPI.Infrastructure
{
    public class Context : DbContext, IUnitOfWork
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }
        public DbSet<Note> Note { get; set; }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            var result = await base.SaveChangesAsync();
            return true;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new NoteEntityTypeConfiguration());

        }

    }
}
