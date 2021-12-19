using AngularCRUDWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularCRUDWebAPI.Infrastructure.EntityConfigurations
{
    public class NoteEntityTypeConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.ToTable("Note");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.CoordinateX).IsRequired();
            builder.Property(m => m.CoordinateY).IsRequired();
            builder.Property(m => m.NoteText).IsRequired();
        }

        void IEntityTypeConfiguration<Note>.Configure(EntityTypeBuilder<Note> builder)
        {
            throw new System.NotImplementedException();
        }
    }
}
