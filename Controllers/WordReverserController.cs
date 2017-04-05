using System;
using Microsoft.AspNetCore.Mvc;
using PrincipisCapital.Platform.Web.Models;
using PrincipisCapital.Platform.Web.Helpers;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class WordReverserController : Controller
    {


        [HttpPost("[action]")]
        public JsonResult ReverseWordAction([FromBody] WordReverserModel Word)
        {
            HttpResponseModel response = new HttpResponseModel();
            response.isSuccess = false;
            response.ErrorMessage = HttpResponses.SomethingWentWrong;


            try {
                
                if(Word.WordSubmitted != null)
                {
                    response.isSuccess = true;
                    response.ErrorMessage = null;
                    response.Result = WordReverserHelpers.ReverseWord(Word.WordSubmitted);
                }               
            }
            catch(Exception exception)
            {
                //TODO log exception to file or somewherelse
                new Exception(exception.Message);
            }

            return Json(response);
        }
       
    }
}
