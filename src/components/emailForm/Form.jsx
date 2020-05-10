import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ValidateName, ValidateEmail, ValidateMessage } from '../../Validation';
import './Form-style.css';
import { email } from '../../email';

class Form extends React.Component {
	constructor () {
		super();
		this.state = {
		
			EmailBool    : {
				bool:false,
				ErrorMessage:""
			},
			PasswordBool :{
				bool:false,
				ErrorMessage:""
			},
			NameBool     :{
				bool:false,
				ErrorMessage:''
			} ,
		
			MessageBool :{
				bool:false,
				ErrorMessage:''
			}, 
			email        : {
				name    : '',
				email   : '',
				message : ''
			}
		};
	}

	render () {

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const Name = document.querySelector('#name').value;
							const Email = document.querySelector('#email').value;
							const Message = document.querySelector('#message').value;
							email(Name, Email, Message);
							this.props.history.push('/messageSent');
						}}
					>
						<h1>Contact us </h1>
						{!this.state.EmailBool.bool && <FormHelperText>{this.state.EmailBool.ErrorMessage}</FormHelperText>}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={() => {
								const error = ValidateEmail(document.querySelector('#email').value);
								this.setState({ EmailBool: error });
							}}
						/>
						{!this.state.NameBool.bool && <FormHelperText>{this.state.NameBool.ErrorMessage}</FormHelperText>}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='name'
							label='Name'
							id='name'
							onChange={() => {
								const error = ValidateName(document.querySelector('#name').value);
								this.setState({NameBool: error });
							}}
						/>
					{!this.state.MessageBool.bool && <FormHelperText>{this.state.MessageBool.ErrorMessage}</FormHelperText>}
						<TextareaAutosize
							className={'textArea'}
							aria-label='minimum height'
							rowsMin={5}
							id='message'
							placeholder='Message'
							onChange={() => {
								const error = ValidateMessage(document.querySelector('#message').value);
								this.setState({ MessageBool: error });
							}}
						/>

						<Button type='submit' variant='contained' color='primary' disabled={!this.state.EmailBool.bool}>
							send
						</Button>
					</form>
				</div>
			</Container>
		);
	}
}

export default Form;
