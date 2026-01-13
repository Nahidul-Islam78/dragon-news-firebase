import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-3xl">
            Login your account
          </h2>
          <fieldset className="fieldset">
            <label className="label font-bold">Email address</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            {' '}
            Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;