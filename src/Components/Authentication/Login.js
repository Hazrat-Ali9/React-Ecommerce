import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link,useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import auth from '../../firbase.init';
const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle,gLoading, gError] = useSignInWithGoogle(auth);

    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(data.email, data.password);
            navigate("/");
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        navigate("/");
    };

    let signInError = null;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>;
    }

    if (loading || gLoading) {
        return <Loading />;
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            {errors.email && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: 'Password is Required',
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            {errors.password && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;