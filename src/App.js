

//redux
import{useSelector} from 'react-redux';

//Routing
import {Routes, Route} from 'react-router';

//pages
import HomePage from './pages/HomePage.js';
import NewContactPage from './pages/NewContactPage.js';
import InterestedPage from './pages/InterestedPage';
import NotInterestedPage from './pages/NotInterestedPage';
import CallBackPage from './pages/CallBackPage';
import DoNotCallPage from './pages/DoNotCallPage';
import EmailPage from './pages/EmailPage.js';
import DownloadPage from './pages/DownloadPage.js';
import AboutPage from './pages/AboutPage.js';
import LoginPage from './pages/LoginPage.js';
import DocsPage from './pages/DocsPage.js';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search.js';

 
const App =()=>{

 
  //get all state contacts
  const allContacts=useSelector(state=>state.allContacts);
 
  //obtain all new contacts
  const newContact = allContacts.filter(contact=>{
      return contact.disposition=='';
  }); 

  //obtain all Interested
  const interested = allContacts.filter(contact=>{
    return contact.disposition=='INTERESTED';
  });

  //obtain all not interested
  const notInterested = allContacts.filter(contact=>{
    return contact.disposition=='NOT INTERESTED';
  });

  //obtain all call back
  const callBack = allContacts.filter(contact=>{
    return contact.disposition=='CALL BACK';
  });

  //obtain all do not call
  const doNotCall = allContacts.filter(contact=>{
    return contact.disposition=='DO NOT CALL';
  });

  //Search FUnction
  // const searchFunction=(searchedName)=>{
  function searchFunction(searchedName){
    // console.log(searchedName);
    // console.log(typeof searchedName);
    // console.log(`this is searchedName from app js ${searchedName}`);
      let searchedContact=
      allContacts.filter(contact=>{
          return contact.givenName.toLowerCase().includes(searchedName);
      });
      // console.log('result ng function sa app js',searchedContact);
      return searchedContact;
  }

  return(
    <body>
      <Header />
      <Search 
        searchFunction={searchFunction}
      />
     
      <Routes>
        <Route 
          path='/' 
          element={
            <HomePage
              // prop the length of each contact detail
              allContacts={allContacts.length}
              newContact={newContact.length}
              interested={interested.length}
              notInterested={notInterested.length}
              callBack={callBack.length}
              doNotCall={doNotCall.length}
              />
          }
        />
        <Route  
          path='/new-contacts'
          element={
            <NewContactPage
              newContact={newContact}
            />
          }
        />
        <Route  
          path='/interested'
          element={
            <InterestedPage
              interested={interested}
            />
          }
        />
        <Route  
          path='/not-interested'
          element={
            <NotInterestedPage
              notInterested={notInterested}
            />
          }
        />
        <Route  
          path='/call-back'
          element={
            <CallBackPage
              callBack={callBack}
            />
          }
        />
        <Route  
          path='/do-not-call'
          element={
            <DoNotCallPage
              doNotCall={doNotCall}
            />
          }
        />
        <Route  
          path='/email'
          element={
            <EmailPage
            />
          }
        />
        <Route  
          path='/download'
          element={
            <DownloadPage
              allContacts={allContacts}
            />
          }
        />
        <Route  
          path='/docs'
          element={
            <DocsPage/>
          }
        />
        <Route  
          path='/about'
          element={
            <AboutPage/>
          }
        />
       
      </Routes>

       <Footer/>
    </body>
  )
}
 
export default App;
