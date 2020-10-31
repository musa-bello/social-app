import React, { Component } from 'react'
import unlock from '../../Images/unlock.svg'
import LoginInput from '../reusable/LoginInput'
import { logIn } from '../actions/authAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        user: {
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
        this.props.logIn(user)
      }

    render() {
        const { user: {email, password} } = this.state
        const { uid } = this.props
        console.log(email, password);
        if (uid) return <Redirect to="/"/>
        return (
            <div className="flex flex-wrap h-screen">
                <div className="w-full sm:w-2/4 bg-contain bg-bottom bg-no-repeat bg-blue-500" style={{backgroundImage:`url(${unlock})`}}> </div>
                <div className="w-full sm:w-2/4 bg-white">
                    <div className="flex justify-end">
                        <div className="my-6 px-2">
                            <p>Don't have an account?</p>
                        </div>
                        <div className="mx-8 my-4">
                            <Link to="/signup">
                                <button className="bg-transparent hover:bg-blue-500 border border-blue-500 hover:border-transparent hover:text-white py-2 px-4 rounded-full focus:outline-none">Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    <form className="py-10 my-32">
                        <div className="md:flex md:items-center mb-6">
                            <LoginInput 
                                label = "Email"
                                name = "email"
                                autoComplete = "email"
                                placeholder = "Enter email address"
                                type = "email"
                                value = {email}
                                onChange = {this.handleChange}

                            />
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <LoginInput 
                                label = "Password"
                                name = "password"
                                autoComplete = "current-password"
                                placeholder = "Enter password"
                                type = "password"
                                value = {password}
                                onChange = {this.handleChange}

                            />
                        </div>
                        <div className="w-1/3 mx-auto">
                            <button className="w-full bg-transparent shadow border border-blue-600 text-gray-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded" type = "submit" onClick = {this.handleSubmit}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logIn: (credentials) => dispatch(logIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
