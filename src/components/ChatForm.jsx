import axios from 'axios';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react'
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ChatForm = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    history.push('/');
  }

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if(!user) {
      history.push('/');
      return;
    }

    axios.get('https://api.chatengine.io/users/me',{
      headers: {
        "project-id": "ed4fad7f-003e-40f3-9f9a-3f43cad82685",
        "user-name": user.email,
        "user-secret": user.uid,
      }
    })
    .then(() =>{
      setLoading(false);
    })
    .catch(() =>{
      // Send user data to chatengine console
      let formData = new FormData();
      formData.append('username', user.email);
      formData.append('email', user.email);
      formData.append('secret', user.uid);

      getFile(user.photoURL)
        .then((avatar) => {
          formData.append('avatar', avatar, avatar.name);

          axios.post('https://api.chatengine.io/users',
            formData,
            { headers: 
              { 
                "private-key": "09a9890a-e6c1-47dc-87ac-873992d1e141",
              }}
          )
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {console.log(error);})
        })
    })
  }, [user, history]);

  if( !user || loading ) return 'Loading...';

  return (
    <div>
      <div className="container">
        <div className="nav-bar">
          <div className="header-wrapper">
            <h2>Hello {user.displayName}</h2>
          </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <ChatEngine
        className="chat-engine"
        projectID = "ed4fad7f-003e-40f3-9f9a-3f43cad82685"
        userName = {user.email}
        userSecret = {user.uid}
      />
    </div>
  )
}

export default ChatForm;
