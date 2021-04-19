// import * as api from '../api'; //Will have to discuss making multiple api files to handle the login and signup.

// // Can probably just dispatch logout instead of having a function in here.
// export const logout = () => ({type: "LOGOUT"});


// // Will have to convert it to access mongoDB.
// export const validateUser = (username, password) => {
//     return dispatch => {
//         const database = firebase.firestore();
//         database.collection("users")
//             .where("username", "==", username)
//             .where("password", "==", password)
//             .get()
//             .then(querySnapshot => {
//                 if (querySnapshot.size === 1) {
//                     const doc = querySnapshot.docs[0];
//                     const user = {
//                         id: doc.id,
//                         first: doc.data().first,
//                         last: doc.data().last,
//                         username: doc.data().username
//                     }
//                     dispatch({type: "LOGIN_SUCCESS", payload: user});
//                 } else {
//                     dispatch({type: "INVALID_LOGIN"});
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch({type: "LOGIN_NETWORK_ERROR"});
//             })
//     }
// }
