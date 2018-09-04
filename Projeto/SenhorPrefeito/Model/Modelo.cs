namespace Model {
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Modelo : DbContext {
        public Modelo()
            : base("name=Modelo") {
        }

        public virtual DbSet<Ocorrencias> Ocorrencias { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder) {
            modelBuilder.Entity<Ocorrencias>()
                .Property(e => e.titulo)
                .IsUnicode(false);

            modelBuilder.Entity<Ocorrencias>()
                .Property(e => e.descricao)
                .IsUnicode(false);

            modelBuilder.Entity<Ocorrencias>()
                .Property(e => e.data)
                .IsUnicode(false);
        }
    }
}
