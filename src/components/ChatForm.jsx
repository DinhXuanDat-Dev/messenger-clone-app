import firebase, { auth } from 'firebase';
import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router-dom';

const ChatForm = () => {
  const history = useHistory()

  const handleLogout = async () => {
    await firebase.auth().signOut();
    history.push('/');
  }

  return (
    <div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ChatEngine
        projectId = "ed4fad7f-003e-40f3-9f9a-3f43cad82685"
        userName = "."
        userSecret = "."
      />
    </div>
  )
}

export default ChatForm;
