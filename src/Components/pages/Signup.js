import React from 'react';

export default function Signup() {
  return (
    <div>
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{fontFamily: '"Lato",sans-serif'}}>

  {/* Content */}
  <div className="w-full bg-grey-lightest" style={{paddingTop: '4rem'}}>
    <div className="container mx-auto py-8">
      <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Create User Page</div>
        <div className="py-4 px-8">
          <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" />
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" />
            </div>
          </div>
           <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email" />
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="phone_number">Phone Number</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phone_number" type="text" placeholder="Your phone number" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
            <p className="text-grey text-xs mt-1">At least 6 characters</p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <p className="text-center my-4">
        <a href="/login" className="text-grey-dark text-sm no-underline hover:text-white">Already have an account ? </a>
      </p>
    </div>
  </div>
</div>



    </div>
  );
}
