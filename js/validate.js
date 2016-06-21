
function login_validate() {
	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function (element) {
			$(element)
			.closest('.form-group')
			.addClass('has-error');
		},
		unhighlight: function (element) {
			$(element)
			.closest('.form-group')
			.removeClass('has-error');
		},
	});

	$("#login-form").validate({
		rules: {
			email:{
				required : true,
				email: true
			},
			password:{
				required: true
			}
		},
		messages: {
			email:{
				required:'Please enter email address',
				email: 'Please enter valid email address'
			},
			password:{
				required: 'Please enter password'
			}
		},
		submitHandler: function(form) {
	    	login();
  		}
	});
}

function register_validate(){
	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function (element) {
			$(element)
			.closest('.form-group')
			.addClass('has-error');
		},
		unhighlight: function (element) {
			$(element)
			.closest('.form-group')
			.removeClass('has-error');
		},
	});
	$.validator.addMethod('strongPassword',function(value,element){
		return this.optional(element) 
		||value.length>=6
		&& /\d/.test(value)
		&& /[a-z]/i.test(value);
	},'Your password must be at least 6 characters long and contain at least one number and one char')

	$("#register-form").validate({
		rules: {
			uname:{
				required : true,
				nowhitespace: true,
				alphanumeric : true
			},
			firstname:{
				required : true,
				lettersonly : true
			},
			lastname:{
				required : true
			},
			email:{
				required : true,
				email: true
			},
			password:{
				required: true,
				strongPassword:true
			},
			password2:{
				required: true,
				equalTo:"#password"
			}
		},

		messages: {
			uname:{
				required:'Please enter User name..!!!'
			},
			firstname:{
				required: 'Please enter Firstname..!!!'
			},
			lastname:{
				required: 'Please enter Lastname..!!!'
			},
			email:{
				required:'Please enter email address..!!!',
				email: 'Please enter valid email address..!!!'
			},
			password:{
				required: 'Please enter password'
			}
		},
		submitHandler: function(form) {
	    	register();
  		}
	});
}