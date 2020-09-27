import React from 'react';
import { useFormik } from 'formik';
 import * as Yup from 'yup';

const phoneRegExp = /^(?:254)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/

const  Signup = ()  =>{
    const formik = useFormik({

     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       phoneNumber:'',
       password: '',
       passwordConfirmation: ''

     },

    validationSchema: Yup.object({

       firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .min(3, 'Must be  3 characters or more')
         .required('Required'),

       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .min(3, 'Must be 3 characters or more')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required('Password is required').required('Required'),
       passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
     phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
     }),


     onSubmit: values => {

       alert(JSON.stringify(values, null, 2));

     },

   });
    
  return (
    <div>
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{fontFamily: '"Lato",sans-serif'}}>

  {/* Content */}
  <div className="w-full bg-grey-lightest" style={{paddingTop: '4rem'}}>
    <div className="container mx-auto py-8">
      <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Create User Page</div>
        <form onSubmit={formik.handleSubmit} >
        <div className="py-4 px-8">
          <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"name="firstName" id="firstName" type="text" placeholder="Your first name"
                 {...formik.getFieldProps('firstName')}
               />
                 {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="lastName" id="lastName" type="text" placeholder="Your last name"
               {...formik.getFieldProps('lastName')}
               />
                {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}
            </div>
          </div>
           <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email"
                {...formik.getFieldProps('email')}
               />
               {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phoneNumber" type="number" placeholder="Your phone Number"
               {...formik.getFieldProps('phoneNumber')}
               />
               {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                ) : null}
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your password"
                {...formik.getFieldProps('password')}
               />
               {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="passwordConfirmation">password Confirmation</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="passwordConfirmation" type="password" placeholder="Confirm password"
               {...formik.getFieldProps('passwordConfirmation')}
               />
               {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                    <div>{formik.errors.passwordConfirmation}</div>
                ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
              Sign Up
            </button>
          </div>
        </div>
        </form>
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

export default Signup;