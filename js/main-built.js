
var ans_j="js/jquery-1.11.0.min.js";
var css_sample='css!css/sample.css';
var font="js/googlefonttest.js";


//'http://fonts.googleapis.com/css?family=Frijole;;
/*
.((bootmetro))-css-loaded {
    height: 1px;
}   
*/



//require(['css!my-css', 'image!preload-background-image.jpg', 'font!google,families:[Tangerine]']);

	
	
	



require([font,css_sample,ans_j,'loadstuff','second-stuff'], function (ft,c,$,s,ss) 
{
	
alert('font css and js have been loaded '+s+ss);
});
/*
			require([css_sample], function() {
						alert('Stylesheet has been loaded');
					});
*/