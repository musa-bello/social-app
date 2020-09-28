import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = ({icon, title, key}) => {
    return (
        <>
            <button className="flex py-2 px-4 my-2 hover:bg-blue-400 hover:text-white rounded-full focus:outline-none">
                <FontAwesomeIcon icon={icon} size="lg" className="" />
                <p className="font-semibold text-lg px-2"> {title} </p>
            </button>   
        </>
    )
}

export default Icon
