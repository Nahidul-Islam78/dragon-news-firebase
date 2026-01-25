import React, { use } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const{Login}=use(AuthContext)
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Login(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        alert(error);
      });
  }
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelLogin} className="card-body">
          <h2 className="text-center font-semibold text-3xl">
            Login your account
          </h2>
          <fieldset className="fieldset">
            <label className="label font-bold">Email address</label>
            <input name='email' type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            {' '}
            Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;