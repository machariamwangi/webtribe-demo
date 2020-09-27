import React from 'react';
import { useFormik} from 'formik';

 import * as Yup from 'yup';

 
const  Login =() => {
  const formik = useFormik({

     initialValues: {
       email: '',
       password: '',

     },

    validationSchema: Yup.object({
       email: Yup.string().email('(Email address is invalid​)').required('(Email address is required​)'),
       password: Yup.string().required('Password is required').required('Required'),
     }),


     onSubmit: values => {

       alert(JSON.stringify(values, null, 2));

     },

   });
  return (
    <div>
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{fontFamily: '"Lato",sans-serif'}}>
  <header className="max-w-lg mx-auto">
    <a href="/">
      <h1 className="text-4xl font-bold text-white text-center">Web Tribe</h1>
    </a>
  </header>
  <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
    <section>
      <h3 className="font-bold text-2xl">Welcome to Web Tribe</h3>
      <p className="text-gray-600 pt-2">Sign in to your account.</p>
    </section>
    <section className="mt-10">
      <form className="flex flex-col" method="POST" action="#">
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
          <input type="text" id="email" name="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
          {...formik.getFieldProps('email')}
          
               />
               {formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
           {...formik.getFieldProps('password')}
               />
               {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
        </div>
        <div className="flex justify-end">
          <a href="/" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
      </form>
    </section>
  </main>
  <div className="max-w-lg mx-auto text-center mt-12 mb-6">
    <p className="text-white">Don't have an account? <a href="/signup" className="font-bold hover:underline">Sign up</a>.</p>
  </div>
  <footer className="max-w-lg mx-auto flex justify-center text-white">
    <a href="/" className="hover:underline">Contact</a>
    <span className="mx-3">•</span>
    <a href="/" className="hover:underline">Privacy</a>
  </footer>
</div>

      
    </div>
  );
}
export default Login;
