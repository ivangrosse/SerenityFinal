
namespace Serene1.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Jerarquia"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.JerarquiaRow))]
    public class JerarquiaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Jerarquia/JerarquiaIndex.cshtml");
        }
    }
}