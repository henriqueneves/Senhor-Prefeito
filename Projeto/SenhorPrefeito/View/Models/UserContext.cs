using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace View.Models {
    public class UsersContext : DbContext {
        public UsersContext()
            : base("DefaultConnection") {
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Ocorrencias> Ocorrencias { get; set; }
    }
}