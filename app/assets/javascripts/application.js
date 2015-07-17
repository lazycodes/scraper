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

$(document).ready(function(){

	// declare our app id
	window.fbAsyncInit = function () {
	    FB.init({ appId: '791850004245509', cookie: true, xfbml: true, oauth: true });

	    // this is a function that runs once facebook has initialised 
	    if (typeof facebookInit == 'function') {
	        facebookInit();
	    }
	};

	// facebook sdk shit
	(function(d){
	    var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
	    js = d.createElement('script'); js.id = id; js.async = true;
	    js.src = "//connect.facebook.net/en_US/all.js";
	    d.getElementsByTagName('head')[0].appendChild(js);
	}(document));

	// the function we want to run 
	function facebookInit() {

		// FB.api(
		// "/{622163018}",
		// function (response) {
		//   if (response && !response.error) {
		   
		//   	console.log('opps! something went wrong');

		//   }else{

		//   	myFacebookLogin();
		//   	console.log('sucsess - you should do something here');

		//   }
		// }
		// );

		FB.login(function(response) {
		    if (response.authResponse) {

		        //login successfull
		        console.log('yep');

				FB.api(
				    "/me?fields=id,name,picture.redirect(false).type(large)",
				    function (response) {
				        if (response && !response.error) {

				            facebookId              = response.id;
				            facebookName            = response.name;
				            facebookProfilePicture  = response.picture.data.url;

							console.log(facebookName);
							$('#name').html('Hello '+facebookName);
							$('#profile').attr('src', facebookProfilePicture);

				        }else{

				        }
				    }
				);

		    } else {

		       //anything else
		       console.log('nope');

		    }
		}, {scope: 'public_profile,email,user_friends'});

	}	// end facebook Init

});	// end doc ready

//------------------------------------------------------------------------------------