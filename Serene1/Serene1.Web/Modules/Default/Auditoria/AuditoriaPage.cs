
namespace Serene1.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Auditoria"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AuditoriaRow))]
    public class AuditoriaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Auditoria/AuditoriaIndex.cshtml");
        }
    }
}