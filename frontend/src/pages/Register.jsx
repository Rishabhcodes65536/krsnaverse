import React from 'react';
import axios from 'axios';
import Input_field from '../components/Input_field';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook

export default function Register() {
    // const history = useHistory(); // Initialize useHistory hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requestData = Object.fromEntries(formData.entries());
        try {
            console.log(requestData);
            const response = await axios.post('http://localhost:9999/register', requestData);
            console.log('Response:', response.data);
            // Redirect to home page after successful registration
            // history.push('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className="text-3xl">Register!</h1>
                        <p className="text-gray-300">
                            Fill up the form below to register
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Input_field name="name" type="text" />
                        <Input_field name="email" type="text" />
                        <Input_field type="password" name="password" /> {/* Corrected name attribute */}
                        <Input_field type="text" name="gender" />
                        <Input_field type="number" name="age" />

                        <div className="text-center lg:text-left">
                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-blue-500 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Register
                            </button>
                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold flex justify-center">
                                Already registered?
                                <a
                                    href="/login"
                                    className="text-blue-500 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                    Login{' '}
                                </a>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
