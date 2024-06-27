import React, { useState } from 'react';
import axios from 'axios';
import Input_field from '../components/Input_field';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        age: ''
    });
    const [otpPhase, setOtpPhase] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [hashedOTP, setHashedOTP] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOtpChange = (index, value) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
        if (value !== '' && index < 3) {
            otpRefs[index + 1].current.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        if (!otpPhase) {
            try {
                setLoading(true);
                // Send OTP request to the server
                // const response = await axios.post('http://localhost:9999/send-otp', { email: formData.email });
                const response = await axios.post(
                  "https://krsnaverse-api.vercel.app/send-otp",
                  { email: formData.email }
                );
                console.log('OTP Sent:', response.data);
                setOtpPhase(true);
                // setOtp(response.data.OTP); // Set OTP received from the server
                setHashedOTP(response.data.hashedOTP); // Set hashed OTP received from the server
            } catch (error) {
                console.error('Error sending OTP:', error);
                setError('Failed to send OTP. Please try again.');
            } finally {
                setLoading(false);
            }
        } else {
            try {
                setLoading(true);
                // Verify OTP with the server
                // const response = await axios.post('http://localhost:9999/verify-otp', { otp, hashedOTP });
                const response = await axios.post(
                  "https://krsnaverse-api.vercel.app/verify-otp",
                  { otp, hashedOTP }
                );
                console.log('OTP Verified:', response.data);
                console.log(response.data.success);
                if (response.data.success) {
                    // Save user data after OTP verification
                    const userData = { ...formData, otp };
                    // const saveResponse = await axios.post('http://localhost:9999/register', userData);
                    const saveResponse = await axios.post(
                      "https://krsnaverse-api.vercel.app/register",
                      userData
                    );
                    console.log('User Registered:', saveResponse.data);
                    // Redirect to login page after successful registration
                    window.location.href = '/login';
                } else {
                    setError('Incorrect OTP. Please enter the correct OTP.');
                }
            } catch (error) {
                console.error('Error verifying OTP or registering user:', error);
                setError('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    const otpRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

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
                        {!otpPhase && (
                            <>
                                <Input_field name="name" type="text" value={formData.name} onChange={handleChange} />
                                <Input_field name="email" type="text" value={formData.email} onChange={handleChange} />
                                <Input_field type="password" name="password" value={formData.password} onChange={handleChange} />
                                <Input_field type="text" name="gender" value={formData.gender} onChange={handleChange} />
                                <Input_field type="number" name="age" value={formData.age} onChange={handleChange} />
                            </>
                        )}
                        {otpPhase && (
                            <div className="flex justify-center items-center">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={otpRefs[index]}
                                        className="border rounded mx-1 text-center w-12 h-12 text-2xl"
                                        maxLength={1}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="text-center lg:text-left">
                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-blue-500 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                            >
                                {!otpPhase ? 'Get OTP' : 'Register'}
                            </button>
                            {error && <p className="text-red-500">{error}</p>}
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
                    {loading && (
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
