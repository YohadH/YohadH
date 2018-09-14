using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalProject__Part1.Controllers
{
    public class PageController : Controller
    {

        // XML http request
        // GET: Page http://localhost:6447/Page/getpage (Get all , get by id)
        public ActionResult GetPage()
        {
            return new FilePathResult("~/Views/Page/GetPage.html", "text/html");
        }


        //  Post : Page http://localhost:6447/Page/PostPage
        public ActionResult PostPage()
        {
            return new FilePathResult("~/Views/Page/PostPage.html", "text/html");
        }

        //  Put&Delete : Page http://localhost:6447/Page/PutDelPage
        public ActionResult PutDelPage()
        {
            return new FilePathResult("~/Views/Page/PutDelPage.html", "text/html");
        }



        //Jquery


        public ActionResult JGetPage()
        {
            return new FilePathResult("~/Views/Page/JGetPage.html", "text/html");
        }


        //  Post : Page http://localhost:6447/Page/PostPage
        public ActionResult JPostPage()
        {
            return new FilePathResult("~/Views/Page/JPostPage.html", "text/html");
        }

        //  Put&Delete : Page http://localhost:6447/Page/PutDelPage
        public ActionResult JPutDelPage()
        {
            return new FilePathResult("~/Views/Page/JPutDelPage.html", "text/html");
        }

        //obserable get all 
        public ActionResult OGetPage()
        {
            return new FilePathResult("~/Views/Page/OGetPage.html", "text/html");
        }

    }
}