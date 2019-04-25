import { db, firebaseAuth } from '../configs/config';

export function auth(email, pass) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pass)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return db
    .collection(`users`)
    .add({
      email: user.email,
      uid: user.uid
    })
    .then(docRef => docRef)
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
}