var url = "http://www.sparna.fr";
jQuery(document).ready(function(){
	jQuery("#menu a").click(function(e){
		if (jQuery(this).attr("href").substring(0, 20) != url){
			window.open(jQuery(this).attr("href"), "_blank");
			e.preventDefault();
		}
	})
})