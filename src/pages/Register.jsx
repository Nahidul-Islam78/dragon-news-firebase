import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-3xl">
            Register your account
          </h2>
          <fieldset className="fieldset">
            <label className="label font-bold">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            <label className="label font-bold">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            <label className="label font-bold">Email address</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>

            <button className="btn btn-neutral mt-4">Resister</button>
          </fieldset>
          <p>
            {' '}
            Already Have An Account ?{' '}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;