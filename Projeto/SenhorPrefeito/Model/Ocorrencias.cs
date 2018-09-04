namespace Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Ocorrencias
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? tipo { get; set; }

        [StringLength(50)]
        public string titulo { get; set; }

        public string descricao { get; set; }

        public int? usuario { get; set; }

        [StringLength(50)]
        public string data { get; set; }
    }
}
