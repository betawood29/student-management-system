// import React, { Component } from 'react'
// import { Button, ButtonGroup, ButtonToolbar, Nav, Navbar } from 'react-bootstrap'
// import './App.css'
// import { Glyphicon } from 'react-bootstrap';
// import { FaHome } from 'react-icons/fa';
// import ArtworkComments from './components/ArtworkComments'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="/">Notificapp, mate</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav pullRight>
//               <ButtonToolbar style={{ margin: 10 }}>
//                 <ButtonGroup>
//                   <Button>
//                     <Glyphicon glyph="envelope" />
//                     &nbsp;Share Proof
//                   </Button>
//                   <Button>
//                     <Glyphicon glyph="minus" />
//                   </Button>
//                   <Button>
//                     150%
//                   </Button>
//                   <Button>
//                     <Glyphicon glyph="plus" />
//                   </Button>
//                   <ArtworkComments/>
//                 </ButtonGroup>
//               </ButtonToolbar>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         <FaHome /> Home
//       </div>
//     )
//   }
// }

// export default App
import React, { useState } from 'react';
import './App.css'
import Notification from './Notification';
import FileUpload from './FileUpload';

function NewsNotification(props) {
  const { news, onClose } = props;

  return (
    <div className="news-notification">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <p>{news}</p>
    </div>
  );
}

function App() {
  const [newsNotifications, setNewsNotifications] = useState([]);

  const addNewsNotification = (news) => {
    const newNotification = {
      id: Date.now(),
      news,
    };

    setNewsNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    // Automatically remove the notification after a delay (e.g., 5 seconds)
    setTimeout(() => removeNewsNotification(newNotification.id), 5000);
  };

  const removeNewsNotification = (id) => {
    setNewsNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const [inputNews, setInputNews] = useState('');

  return (
    <div className="App div1">
      <h1>Notification Bar 📢</h1>
      <div className='bord'>
      <FileUpload/>
      {/* <input
        type="text"
        placeholder="Enter your news here"
        value={inputNews}
        onChange={(e) => setInputNews(e.target.value)}
      /> */}
      {/* <input type="file" accept=".pdf,.doc,.docx" onChange={this.handleFileChange} /> */}
      {/* <Button variant="contained" color="primary" component="span">
          Upload
        </Button> */}
      {/* <button onClick={() => addNewsNotification(inputNews)}>Show News Notification</button> */}
      <div className="news-notifications-container">
        {newsNotifications.map((notification) => (
          <NewsNotification
            key={notification.id}
            news={notification.news}
            onClose={() => removeNewsNotification(notification.id)}
          />
          
        ))
        }
        <Notification/>
        </div>
      </div>
    </div>
  );
}

export default App;
