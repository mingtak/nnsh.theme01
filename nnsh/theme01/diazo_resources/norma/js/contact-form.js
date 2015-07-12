var validateForm = null;
function userSubmitForm(form, url, nonce){
	var error = formValidate(form, {
		error_message_show: true,
		error_message_time: 5000,
		error_message_class: "sc_infobox sc_infobox_style_error",
		error_fields_class: "error_fields_class",
		exit_after_first_error: false,
		rules: [
			{
				field: "username",
				min_length: { value: 1,	 message: NAME_EMPTY },
				max_length: { value: 60, message: NAME_LONG}
			},
			{
				field: "email",
				min_length: { value: 7,	 message: EMAIL_EMPTY },
				max_length: { value: 60, message: EMAIL_LONG},
				mask: { value: "^([a-z0-9_\\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$", message: EMAIL_NOT_VALID}
			},
			{
				field: "message",
				min_length: { value: 5,  message: MESSAGE_EMPTY },
				max_length: { value: 300, message: MESSAGE_LONG}
			}
		]
	});
	if (!error) {
		validateForm = form;
		var user_name  = form.find("#sc_contact_form_username").val();
		var user_email = form.find("#sc_contact_form_email").val();
		var user_msg   = form.find("#sc_contact_form_message").val();
		var data = {
			action: "send_contact_form",
			nonce: "regenerate_key_every_time",
			user_name: user_name,
			user_email: user_email,
			user_msg: user_msg
		};
		jQuery.post(url, data, userSubmitFormResponse, "text");
	}
}
	
function userSubmitFormResponse(response) {
	var rez = JSON.parse(response);
	var result = validateForm.find(".result")
		.toggleClass("sc_infobox_style_error", false)
		.toggleClass("sc_infobox_style_success", false);
	if (rez.error == "") {
		result.addClass("sc_infobox_style_success").html(SEND_COMPLETE);
		setTimeout("jQuery(\'.sc_contact_form .result\').fadeOut(); jQuery(\'.sc_contact_form form\').get(0).reset();", 3000);
	} else {
		result.addClass("sc_infobox_style_error").html(SEND_ERROR + ' ' + rez.error);
	}
	result.fadeIn();
}
