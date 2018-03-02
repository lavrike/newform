import React from 'react';
import Input from './Input';
import SubmitButton from './Button.jsx';

const style = {
    inputStyle: {
        margin: 12,
    },
  
  };




function RegistrationForm({ onSubmit }) {
        return(
            <form className="" onSubmit={onSubmit} style={style.form}>
                <Input type='text' name='firstname' placeholder='Имя' />
                <Input type="text" name="username" placeholder="Электронная почта" />
                <Input type="password" name="password" placeholder="Пароль"/><br />
                <SubmitButton />
            </form>
        );

    }

export default RegistrationForm; 