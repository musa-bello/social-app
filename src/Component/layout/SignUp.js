import React, { Component } from 'react'
import myApp from '../../Images/myApp.svg'
import Doodles from '../../Images/Doodles.svg'
import SignUpInput from '../reusable/SignUpInput';
import { signUp } from '../actions/authAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            email: "", 
            password: ""
        }
      }
    
      handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
      }

      handleSubmit = (event) => {
        const { user } = this.state;
        event.preventDefault()
        console.log(this.state);
        this.props.signUp(user)
      }

    render() {
        const { user: {firstName, lastName, email, password} } = this.state
        console.log(firstName, lastName, email, password);
        return (
            <div className="flex flex-wrap h-screen bg-cover" >
                <div className="w-full sm:w-1/3 bg-contain bg-no-repeat bg-center bg-red-300"style={{backgroundImage:`url(${myApp})`}}>
                
                </div>
                <div className="w-full sm:w-2/3" style={{backgroundImage:`url(${Doodles})`}}>
                    <div className="flex justify-end">
                        <div className="my-6 px-2">
                            <p>Already have an account?</p>
                        </div>
                        <div className="mx-8 my-4">
                            <Link to="/">
                                <button className="bg-transparent hover:bg-blue-500 border border-blue-500 hover:border-transparent hover:text-white py-2 px-4 rounded-full">Sign In
                                </button>
                            </Link>
                        </div>
                    </div>
                    <form className="rounded-md shadow py-10 my-32 w-2/3 mx-auto p-12 bg-white bg-transparent bg-opacity-75" >
                        <div className="md:flex md:items-center justify-center">
                            <div className="w-full md:w-1/3 px-3">
                                <SignUpInput 
                                    label="First Name"
                                    name="firstName"
                                    placeholder = "First Name"
                                    type = "text"
                                    value = {firstName}
                                    onChange = {this.handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3">
                                <SignUpInput 
                                    label="Last Name"
                                    name="lastName"
                                    placeholder = "Last Name"
                                    type = "text"
                                    value = {lastName}
                                    onChange = {this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 px-3 mx-auto">
                            <SignUpInput 
                                label="Email"
                                name="email"
                                autoComplete="username"
                                placeholder = "Email"
                                type = "email"
                                value = {email}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div className="w-full md:w-2/3 px-3 mx-auto">
                            <SignUpInput 
                                label="Password"
                                name="password"
                                autoComplete="new-password"
                                placeholder = "Password"
                                type = "password"
                                value = {password}
                                onChange = {this.handleChange}
                            />
                            <div className="w-full">
                                <button className="w-full bg-transparent shadow border border-blue-600 text-gray-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded" type = "submit" onClick = {this.handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: creds => dispatch(signUp(creds))
    }
}

export default connect(null, mapDispatchToProps) (SignUp)
