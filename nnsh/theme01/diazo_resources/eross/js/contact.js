jQuery(document).ready(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Comment or uncomment the result you want.
	// Currently, shake on error is enabled.
	// When a field is left blank, jQuery will shake the form

	/* Begin config */

	//	var shake = "Yes";
		var shake = "No";

	/* End config */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// Do not touch below /////////////////////////////////////////

	jQuery('#message').hide();

	// Add validation parts
	jQuery('#contact input[type=text], #contact input[type=email], #contact select, #contact textarea').each(function(){
		jQuery(this).after('<mark class="validate"></mark>');
	});

	// Validate as you type
	jQuery('#comments, #name, #subject').focusout(function() {
		if (!jQuery(this).val())
			jQuery(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			jQuery(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});

	jQuery('#email').focusout(function() {
		if (!jQuery(this).val() || !isEmail(jQuery(this).val()))
			jQuery(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			jQuery(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});

	jQuery('#submit').click(function() {
		jQuery("#message").slideUp(200,function() {
			jQuery('#message').hide();

			// Kick in Validation
			jQuery('#email').triggerHandler("focusout");
			jQuery('#comments').triggerHandler("focusout");
			jQuery('#name').triggerHandler("focusout");
			jQuery('#subject').triggerHandler("focusout");

		});
	});

	jQuery('#contactform').submit(function(){

		if (jQuery('#contact mark.error').size()>0) {
			if(shake == "Yes") {
			jQuery('#contact').effect('shake', { times:2 }, 75);
			}
			return false;
		}

		var action = jQuery(this).attr('action');

 		jQuery('#submit')
			.after('<img src="images/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		jQuery.post(action, jQuery('#contactform').serialize(),
			function(data){
				jQuery('#message').html( data );
				jQuery('#message').slideDown();
				jQuery('#contactform img.loader').fadeOut('slow',function(){jQuery(this).remove()});
				jQuery('#contactform #submit').removeAttr('disabled');
				if(data.match('success') != null) jQuery('#contactform #submit').attr("disabled", true);
			}
		);

		return false;

	});

	function isEmail(emailAddress) {

		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)jQuery)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?jQuery)/i);

		return pattern.test(emailAddress);
	}

	function isNumeric(input) {
    	return (input - 0) == input && input.length > 0;
	}

});