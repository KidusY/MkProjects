export const ValidateName = (Name) => {
	const Message = {
		ErrorMessage : '',
		bool         : false
	};

	if (Name.length === 0) {
		Message.ErrorMessage = 'Please Enter Name';
		Message.bool = 	false;
	}
	return Message;
};
export const ValidateEmail = (email) => {
	const Message = {
		ErrorMessage : '',
		bool         : true
	};

	if (email.length === 0) {
		Message.ErrorMessage = 'Please Enter Email';
		Message.bool = false;
	}
	else if(email.length >128){
		Message.ErrorMessage = 'Please Enter less than *128 characters';
		Message.bool = false;
	}

	else if ( !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))){
		Message.ErrorMessage = 'Please Enter Valid Email';
		Message.bool = false;
	}
	else {
		Message.ErrorMessage = '';
		Message.bool = true;
	}
	return Message;
};

export const ValidateMessage = (message) => {
	const Message = {
		ErrorMessage : '',
		bool         : true
	};

	if (message.length === 0) {
		Message.ErrorMessage = 'Please Enter Message';
		Message.bool = false;
	}
	else {
		Message.ErrorMessage = '';
		Message.bool = true;
	}

	return Message;
};

export const ValidatePassword = (password) => {
	const Message = {
		ErrorMessage : '',
		bool         : true
	};

	if (password.length === 0) {
		Message.ErrorMessage = 'Please Enter Password';
		Message.bool = false;
	}
	else {
		Message.ErrorMessage = '';
		Message.bool = true;
	}

	return Message;
};
