import React from 'react'
import { GoogleOutlined , FacebookOutlined } from '@ant-design/icons'

const LoginForm = () => {
  return (
    <div className="form-wrapper">
        <h1>Messenger App</h1>
        <div className="login-form">
            <div className="login-btn google">
                <GoogleOutlined /> Login with your Google account
            </div>
            <div className="login-btn facebook">
                <FacebookOutlined /> Login with your Facebook account
            </div>
        </div>
    </div>
  )
}

export default LoginForm;