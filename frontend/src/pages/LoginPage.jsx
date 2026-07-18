import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader, User } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	// const loading = false;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, loading, loginAsGuest, loginAsGuestAdmin } = useUserStore();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		login(email, password);
	};

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-cyan-400'>Sign in to your account</h2>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-300'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-cyan-500 
									 focus:border-cyan-500 sm:text-sm'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-300'>
								Password
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>

						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600
							 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-cyan-500 transition duration-150 ease-in-out disabled:opacity-50'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='mr-2 h-5 w-5' aria-hidden='true' />
									Login
								</>
							)}
						</button>
					</form>

					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-600' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-2 bg-gray-800 text-gray-400'>Or quick access</span>
							</div>
						</div>

						<div className='mt-6 grid grid-cols-2 gap-3'>
							<button
								onClick={loginAsGuest}
								disabled={loading}
								className='w-full flex justify-center items-center py-2 px-4 border border-cyan-500 rounded-md shadow-sm text-sm font-medium text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-150 ease-in-out disabled:opacity-50'
							>
								<User className='mr-2 h-5 w-5' />
								Guest Mode
							</button>
							<button
								onClick={loginAsGuestAdmin}
								disabled={loading}
								className='w-full flex justify-center items-center py-2 px-4 border border-emerald-500 rounded-md shadow-sm text-sm font-medium text-emerald-400 hover:bg-emerald-500 hover:text-white transition duration-150 ease-in-out disabled:opacity-50'
							>
								<Lock className='mr-2 h-5 w-5' />
								Guest Admin
							</button>
						</div>
					</div>

					<p className='mt-8 text-center text-sm text-gray-400'>
						Not a member?{" "}
						<Link to='/signup' className='font-medium text-cyan-400 hover:text-cyan-300'>
							Sign up now <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};
export default LoginPage;


