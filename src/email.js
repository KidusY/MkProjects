import axios from 'axios';

export const email = async (name,email, message) => {
	//save email
	try {
		await axios.post(`https://cfoig09ck4.execute-api.us-west-2.amazonaws.com/default/emailAppFunction`, {
			api_key : '11111111111111111111',
			Name    : name,
			Subject : name,
			Email   : email,
			Message : message
		});
	} catch (err) {
		console.log(err);
	}
	//send email
	try {
		await axios.post(`https://ocs8ii6eod.execute-api.us-west-2.amazonaws.com/default/sendEmailFunction`, {
			api_key_sendEmail : '22222222222222222222',
			Name              : name,
			Subject           : name,
			Email             : email,
			Message           : message
		});
	} catch (err) {
		console.log(err);
	}
};
