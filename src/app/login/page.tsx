"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {auth} from '@/lib/firebase'


export default function Login() {
  console.log('Verify', auth.config )

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex justify-center min-h-screen'>
      <div>
        <p className='m-5 font-sans text-3xl text-bold font-semibold text-tale-500'> Login </p>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="********"
              required
            />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>
        <span>New User!</span> <span><Link href={'../register'}>Register</Link></span>
      </p>
      </form>
      
    </div>
      </div>

    </div>
  );
}
