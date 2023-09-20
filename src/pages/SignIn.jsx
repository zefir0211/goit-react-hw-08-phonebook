import { useDispatch} from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/authorization/requestAPI';
import PagesSCSS from './Pages.module.scss';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = async data => dispatch(logIn(data));

    return (
        <section className={PagesSCSS.section}>
            <h2 className={PagesSCSS.header}>Sign in to PhoneBook</h2>
            <form autoComplete="on" onSubmit={handleSubmit(onSubmit)} className={PagesSCSS.form}>
                <label className={PagesSCSS.label}>
                    <p className={PagesSCSS.paragraph}>Email</p>
                    <input
                        className={PagesSCSS.input}
                        type="email"
                        {...register('email')}
                        required
                        placeholder="NickName@gmail.com"
                    />
                </label>
                <label className={PagesSCSS.label}>
                    <p className={PagesSCSS.paragraph}>Password</p>
                    <input
                        className={PagesSCSS.input}
                        type="password"
                        {...register('password')}
                        required
                    />
                </label>
                <button type="submit" className={PagesSCSS.button}>Sign In</button>
            </form>
        </section>
    )
}
export default SignIn;