
export const logIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: "LOG_IN" })
            })
            .catch(error => {
                dispatch({ type: "LOG_IN_ERROR" }, error)
            })
    }
}


export const signUp = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        firebase
            .auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((response) => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: credentials.firstName,
                    lastName: credentials.lastName,
                    createdOn: new Date()
                })
            })
            .then(() => {
                dispatch({ type: "SIGN_UP"})
            })
            .catch(error => {
                dispatch({ type: "SIGN_UP_ERROR" }, error)
            })
    }
}


