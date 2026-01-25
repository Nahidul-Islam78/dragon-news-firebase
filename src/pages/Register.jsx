import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
  const {createUser,setUser}=use(AuthContext)
  const handelRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, email, password })
    //create user
    createUser(email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <form
      onSubmit={handelRegister}
      className="flex justify-center items-center"
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-semibold text-3xl">
            Register your account
          </h2>
          <fieldset className="fieldset">
            <label className="label font-bold">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />
            <label className="label font-bold">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            <label className="label font-bold">Email address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name='password'
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>

            <button type="submit" className="btn btn-neutral mt-4">
              Resister
            </button>
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
    </form>
  );
};

export default Register;