using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrincipisCapital.Platform.Web.Helpers
{
    public class WordReverserHelpers
    {
        public static string ReverseWord(string word)
        {
            return new String(word.Reverse().ToArray());
        }
    }
}
