
const authReducer = (state={}, action) => {
    switch (action.type) {
        case "LOG_IN":
            console.log("login success", "Welcome back");
            return state
        case "LOG_IN_ERROR":
            console.error("Login failed");
            return state
        case "SIGN_UP":
            console.log("Signup successful");
            return state
        case "SIGN_UP_ERROR":
            console.error("Signup failed");
            return state
        default:
            return state;
    }
}

export default authReducer;