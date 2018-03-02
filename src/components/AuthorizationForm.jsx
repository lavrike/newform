import React from 'react';
import Input from './Input';
import EnterButton from './EnterButton'

const style = {
    inputStyle: {
        margin: 12,
    },
  
  };



function AuthorizationForm({ onSubmit }) {
        return(
            <form className="" onSubmit={onSubmit} style={style.form}>
                <Input type="text" name="username" placeholder="Электронная почта" />
                <Input type="password" name="password" placeholder="Пароль"/><br />
                <EnterButton />
            </form>
        );

    }

export default AuthorizationForm; 