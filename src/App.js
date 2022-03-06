import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import ChatForm from './components/ChatForm';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={ChatForm} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
