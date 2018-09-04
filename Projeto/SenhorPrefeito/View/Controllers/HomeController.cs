using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace View.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            //ViewBag.Message = "Mensagem tranferível para a view.";

            return View();
        }

        public ActionResult About() {
            ViewBag.Message = "Sobre nós.";

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Página de contato.";

            return View();
        }

        public ActionResult Mapa() {

            return View();
        }
    }
}
