function show() {

	     if (navlinks.style.left === "-100%") {
	         showmenu.classList.remove("fa-bars");
	         showmenu.classList.add("fa-times");
	         navlinks.classList.add("is-active");
	         contentwrapper.classList.add("if-is-active");
	         navlinks.style.left = "0";
	     } else {
	        navlinks.style.left = "-100%";
	        showmenu.classList.remove("fa-times");
	        showmenu.classList.add("fa-bars");
	        navlinks.classList.remove("is-active");
	        contentwrapper.classList.remove("if-is-active");
     }

	    }
function showsearchengine() {

	   if (searcher.style.top === "-100%") {
	       searcher.style.top = "0";
	   } else {
	       searcher.style.top = "-100%";
   }

}