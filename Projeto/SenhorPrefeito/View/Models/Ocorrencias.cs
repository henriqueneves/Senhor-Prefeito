using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace View.Models {
        [Table("Ocorrencias")]
        public partial class Ocorrencias {
            [Key]
            [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
            public int Id { get; set; }

            public int? tipo { get; set; }

            public string titulo { get; set; }

            public string descricao { get; set; }

            public int? usuario { get; set; }
            public string data { get; set; }
        }
}