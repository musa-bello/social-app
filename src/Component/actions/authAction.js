
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


/* export const createUser = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        firestore
            .collection('users')
            .add({
                firstName: creds.firstName,
                lastName: creds.lastName,
                email: creds.email,
                createdOn: new Date()
            })
            .then(() => {
                dispatch({ type: "CREATE_USER" })
            })
            .catch(error => {
                dispatch({ type: "CREATE_USER_ERROR" }, error)
            })
    }
} */
