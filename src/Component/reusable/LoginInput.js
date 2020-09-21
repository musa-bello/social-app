import React from 'react'

const LoginInput = ({ name, type, placeholder, onChange, value, autoComplete, label, ...props }) => {
    return (
        <>
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    {label}
                </label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={onChange}
                />
            </div>   
        </>
    )
}

export default LoginInput
