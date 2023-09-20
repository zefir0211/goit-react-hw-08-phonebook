import { useDispatch} from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from 'redux/authorization/requestAPI';
import PagesSCSS from './Pages.module.scss';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = async data => dispatch(signUp(data));
    return (
        <section className={PagesSCSS.section}>
            <h2 className={PagesSCSS.header}>Let's start registration?</h2>
            <form autoComplete="on" onSubmit={handleSubmit(onSubmit)} className={PagesSCSS.form}>
                <label className={PagesSCSS.label}>
                    <p className={PagesSCSS.paragraph}>Name</p>
                    <input
                        className={PagesSCSS.input}
                        type="name"
                        {...register('name')}
                        required
                        placeholder="NickName"
                    />
                </label>
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
                        minLength="5"
                        maxLength="12"
                    />
                </label>
                <button type="submit" className={PagesSCSS.button}>register</button>
            </form>
        </section>
    )
}
export default SignUp;