// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

//------------------------------------------------------------------------------------

$(function() {
  $(document).foundation();
});

//------------------------------------------------------------------------------------

window.fbAsyncInit = function () {
    FB.init({ appId: '791850004245509', cookie: true, xfbml: true, oauth: true });

    // *** here is my code ***
    if (typeof facebookInit == 'function') {
        facebookInit();
    }
};

(function(d){
    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));

function facebookInit() {

	FB.api(
	"/{622163018}",
	function (response) {
	  if (response && !response.error) {
	   
	  	console.log('error');

	  }else{
	  	console.log('sucsesss');
	  }
	}
	);

}	// end facebook Init


//------------------------------------------------------------------------------------