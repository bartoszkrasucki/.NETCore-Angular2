using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrincipisCapital.Platform.Web.Models
{
    public class HttpResponseModel
    {
        public bool isSuccess { get; set; }
        public string ErrorMessage { get; set; }
        public string Result { get; set; }
    }

    public static class HttpResponses
    {
        public static string SomethingWentWrong = "Sorry but something went wrong please try again later.";
        public static string InputDataInWrongFormat = "Input data is in wrong format.";
    }

}
