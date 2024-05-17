import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaRegEnvelope,  FaUser} from 'react-icons/fa';
const Register = () => {
  const initialValues = {
    firstname: '',
    name: '',
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@] {2,}$/i;
    if (!values.firstname) {
      errors.firstname = 'Firstname is required!';
    }
    if (!values.name) {
      errors.name = 'Lastname is required!';
    }
    if (!values.email) {
      errors.email = 'Fill in the required field!';
    } else if (regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters!';
    }
    return errors;
  };
  let password = document.getElementById('password');
  let eyeIcon = document.getElementById('eyeicon');
  let eyeIcon1 = document.getElementById('eyeicon1');
  const iconChange = () => {
    if (password.type == 'password') {
      password.type = 'text';
      eyeIcon1.classList.toggle('hidden');
      eyeIcon.classList.toggle('hidden');
    } else {
      password.type = 'password';
      eyeIcon1.classList.toggle('hidden');
      eyeIcon.classList.toggle('hidden');
    }
  };

  return (
    <>
      <div className='container mx-auto' id='wrapper'>
        <div className='flex flex-col items-center bg-white w-10/12 shadow-lg mx-auto rounded-xl overflow-hidden md:w-10/12 lg:flex-row'>
          <div className='w-full lg:w-1/2  bg-purple-400' id='contain'></div>
          <div className='w-full py-16 px-12 lg:w-1/2'>
            <h2 className='text-3xl mb-4 text-center font-bold'>Sign Up</h2>
            <p className='mb-4 text-center t'>
              Create your account. It's free and only takes a minute.
            </p>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className='text-center py-2 px-2 bg-gray-100 border border-green-600 font-semibold rounded-md text-green-600'>
                Signed in successfully!
              </div>
            ) : (
              ''
            )}
            <form action='#' onSubmit={handleSubmit}>
              <div className='grid gap-3 lg:grid-cols-2'>
                <div className='sm:flex sm:flex-col'>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    type='text'
                    name='firstname'
                    value={formValues.firstname}
                    placeholder='Firstname'
                    onChange={handleChange}
                    className='border border-gray-400 py-1 px-2 rounded-sm w-full focus:outline-none active:outline-none required'
                  />
                  <FaUser className='relative bottom-6 right-4 self-end hide' />
                  <p className='text-red-600'>{formErrors.firstname}</p>
                </div>
                <div className='sm:flex sm:flex-col'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    placeholder='Lastname'
                    onChange={handleChange}
                    className='border border-gray-400 py-1 px-2 rounded-sm w-full focus:outline-none active:outline-none required'
                  />
                  <FaUser className='relative bottom-6 right-4 self-end hide' />
                  <p className='text-red-600'>{formErrors.name}</p>
                </div>
              </div>
              <div className='mt-4 flex flex-col'>
                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  name='email'
                  value={formValues.email}
                  placeholder='Email'
                  onChange={handleChange}
                  className='border border-gray-400 rounded-sm py-1 px-2 w-full focus:outline-none active:outline-none required'
                />
                <FaRegEnvelope className='relative bottom-6 right-5 self-end' />
                <p className='text-red-600'>{formErrors.email}</p>
              </div>
              <div className='mt-4 flex flex-col'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  value={formValues.password}
                  placeholder='Password'
                  onChange={handleChange}
                  id='password'
                  className='border border-gray-400 rounded-sm py-1 px-2 w-full focus:outline-none active:outline-none required'
                />
                <FaEye
                  onClick={iconChange}
                  className='hidden relative bottom-6 right-5 cursor-pointer self-end'
                  id='eyeicon'
                />
                <FaEyeSlash
                  onClick={iconChange}
                  className='relative bottom-6 right-5 cursor-pointer self-end'
                  id='eyeicon1'
                />
                <p className='text-red-600'>{formErrors.password}</p>
              </div>
              <div className='mt-4'>
                <input
                  type='checkbox'
                  className='border border-gray-400 w-4 h-4 required'
                />
                <span>
                  {' '}
                  I accept the{' '}
                  <Link
                    to='/NotFound'
                    className='text-purple-500 font-semibold'>
                    Terms of use
                  </Link>{' '}
                  &{' '}
                  <Link to='/NotFound' className='text-purple-500 font-semibold'>
                    Privacy Policy
                  </Link>
                </span>
              </div>
              <div className='mt-4'>
                <button className='w-full bg-purple-400 font-semibold rounded-md py-3 text-center text-white'>
                  Register Now
                </button>
              </div>
              <div className='w-full flex items-center justify-center mt-3'>
                <p className='text-sm font-normal'>Already have an account?</p>
                <span className='font-semibold text-red-600 underline underline-offset-2 ml-1 cursor-pointer'>
                  <Link to=''>Login here</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
