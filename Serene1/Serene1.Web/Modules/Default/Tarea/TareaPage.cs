﻿
namespace Serene1.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Tarea"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TareaRow))]
    public class TareaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Tarea/TareaIndex.cshtml");
        }
    }
}