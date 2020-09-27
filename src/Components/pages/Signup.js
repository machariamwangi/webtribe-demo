import React , {useState} from 'react';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const apiUrl = 'https://hidden-everglades-98624.herokuapp.com/api/user'
const phoneRegExp = /^(?:254)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/

const  Signup = ()  =>{
  const [serverState, setServerState] = useState();
      const handleServerResponse = (ok, msg) => {
        setServerState({ok, msg});
      };

      const history = useHistory();

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
     phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid,Should be of format 2547XXXXXXXX').required('Required')
     }),


     onSubmit: (values, actions) => {
         const formData = {
           firstName: values.firstName ,
          lastName: values.lastName,
          email: values.email ,
          phone:  values.phoneNumber,
          password:  values.password
         }
      //  alert(JSON.stringify(values, null, 2));
 axios({
          method: "POST",
          url: apiUrl,
          headers: {
             "Content-Type": "application/json"
          },
          data: formData
        })
          .then(response => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleServerResponse(true, "Thanks!");
             if (response.data.message === 'New User Added!' ){ 
              console.log("this is success",response.data.message)
                 Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${response.data.message}`,
            showConfirmButton: true,
            // timer: 3000
          })
          
          history.push("/");
            }else{
                Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${response.data.message}`,
            showConfirmButton: true,
            // timer: 3000
          })
            }
          })
          .catch(error => {
            actions.setSubmitting(false);
            handleServerResponse(false, error.Error);
              Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${error.Error}`,
            showConfirmButton: true,
            // timer: 3000
          })
          });
     },

     },

   );
    
  return (
    <div>
    <div className="bg-indigo-900 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style={{fontFamily: '"Lato",sans-serif'}}>

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
                    <div className="text-red-700">{formik.errors.firstName}</div>
                  ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="lastName" id="lastName" type="text" placeholder="Your last name"
               {...formik.getFieldProps('lastName')}
               />
                {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-700">{formik.errors.lastName}</div>
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
                    <div className="text-red-700">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phoneNumber" type="number" placeholder="Your phone Number"
               {...formik.getFieldProps('phoneNumber')}
               />
               {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="text-red-700">{formik.errors.phoneNumber}</div>
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
                    <div className="text-red-700">{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="w-1/2 ml-1">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="passwordConfirmation">password Confirmation</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="passwordConfirmation" type="password" placeholder="Confirm password"
               {...formik.getFieldProps('passwordConfirmation')}
               />
               {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                    <div className="text-red-700">{formik.errors.passwordConfirmation}</div>
                ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button className="bg-indigo-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
              Sign Up
            </button>
             {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}
          </div>
           <p className="text-center my-4">Already have an account ?
        <a href="/login" className="text-purple-900 text-sm no-underline hover:text-indigo-900"> Login </a>
      </p>
        </div>
        </form>
      </div>
     
    </div>
  </div>
</div>



    </div>
  );
}

export default Signup;