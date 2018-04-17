String.prototype.replaceChars = function(character, replacement){
        var str = this;
        var a;
        var b;
        for(var i=0; i < str.length; i++){
            if(str.charAt(i) == character){
                a = str.substr(0, i) + replacement;
                b = str.substr(i + 1);
                str = a + b;
            }
        }
        return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        case "-u":
            query = query.substr(3);
            window.location = "https://userstyles.org/styles/browse?search_terms=" +
            query.replaceChars(" ", "+");
            break;

        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;

        case "-w":
            query = query.substr(3);
            window.location =
            "https://en.wikipedia.org/w/index.php?search=" +
            query.replaceChars(" ", "%20");
            break;

        case "-n":
            query = query.substr(3);
            window.location = 
    	"https://nyaa.si/?f=0&c=1_2&q=" + 
    	query.replaceChars("+", "%2B");
    	break;

        case "-e":
        	query=query.substr(3);
        	window.location = 
	"https://exhentai.org/?f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=0&f_non-h=0&f_imageset=0&f_cosplay=0&f_asianporn=0&f_misc=0&f_search=" + 
	query.concat("&f_apply=Apply+Filter");
	break;

        default:
            window.location="https://www.google.fr/search?q=" +
                query.replaceChars("", "+");
    }
}
 
window.onload = function(){
        searchinput = document.getElementById("searchbox");
        if(!!searchinput){
                searchinput.addEventListener("keypress", function(a){
                        var key = a.keyCode;
                        if(key == 13){
                                var query = this.value;
                                search(query);
                        }
                });
        }
        var search_sqr = document.getElementById("search_sqr");
        var value = '1';
        $(document).keydown(function(e){
                if (e.keyCode == 17 && value == '1') { 
                    searchinput.style.bottom = '0px';
                    value = '0';
                }
                else if (e.keyCode == 17 && value == '0') { 
                    searchinput.style.bottom = '-100px';
                    value = '1';
                }
        });
}
