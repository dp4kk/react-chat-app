import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
      <ChatEngine
        height="100vh"
        projectID="65f4178e-83eb-4dbf-a4c0-19523f3aef93"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      />
    );
}

export default App;