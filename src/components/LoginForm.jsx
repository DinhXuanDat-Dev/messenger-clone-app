import React from 'react'
import { GoogleOutlined , FacebookOutlined } from '@ant-design/icons'
import "firebase/auth"
import { auth } from "../firebase"
import firebase from 'firebase';

const LoginForm = () => {
  return (
    <div className="form-wrapper">
        <h1>Messenger App</h1>
        <div className="login-form">
            <div className="login-btn google"
              onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
              <GoogleOutlined /> Login with your Google account
            </div>
            <div 
              className="login-btn facebook"
              onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
              <FacebookOutlined /> Login with your Facebook account
            </div>
        </div>
    </div>
  )
}

export default LoginForm;