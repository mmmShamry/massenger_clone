import React, {useState, useEffect} from 'react';
import { FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'sam', message:'hey'}, {username: 'kasun', message: 'hello'}]);
  const [username, setUsername] = useState('');
  
  useEffect(()=>{
    // runs when app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  }, [] )

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'));
  },[] )

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="logo.png" />
        <h4>{username}, Welcome to LoopChat</h4>

        <form className="app_form">
          <FormControl className="app_formControl">

            <InputLabel >Enter a message</InputLabel>
            <Input className="app_input" value={input} onChange={event => setInput(event.target.value)}/>

            <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick= {sendMessage}>
              <SendIcon />
            </IconButton>
          </FormControl>  
        </form>
        <FlipMove>
        {
            messages.map(({id,message}) => (
            <Message key={id} username={username} message={message} />
            
          ))
        }

        </FlipMove>

        

        {/* input field */}
        {/* buttons */}
        {/* messages */}
      </header>
    </div>
  );
}

export default App;
