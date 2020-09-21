import React from 'react'

const SignUpInput = ({ label, name, type, placeholder, onChange, value, autoComplete}) => {
    return (
        <>
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input className="border-2 border-gray-400 rounded w-full py-2 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={onChange}
            />   
        </>
    )
}

export default SignUpInput
