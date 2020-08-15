import React from 'react'
import {Field, reduxForm} from 'redux-form'



const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type="password"/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

// @ts-ignore
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm
                // @ts-ignore
                onSumbit={onSubmit}/>
        </div>
    )
}

export default Login
