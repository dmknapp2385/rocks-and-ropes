import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Homepage from './Pages/Home';
import Upstairs from './Pages/Upstairs';
import Weights from './Pages/Weights';
import Navbar from './Components/Navbar';
import CalendarPage from './Components/Calendar';
import FreeWeights from "./Pages/FreeWeights";
import Rings from "./Pages/Rings";
import Trx from "./Pages/Trx";
// import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddModal from './Components/AddModal';
import Week from './Components/Week';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  //shows add to calendar modal
  const [showModal, setShowModal] = useState(false);
  //sets activity to save to calendar
  const [activity, setActivity] = useState('');
  const [activities, setActivities] = useState([]);
  //sets link to save to calendar
  const[link, setlink] = useState('');
  //sets if add to calendar modal is an edit/update
  const [isEdit, setIsEdit] = useState(false);
  // sets form data for add to calendar  modal
  const [formData, setFormData] = useState({day:'', length:'', reps:0, sets:0, note:''});
  const [updateId, setUpdateId] = useState('');
  const detailModalProps = [setShowModal, setIsEdit, setFormData, setActivity, setlink, setUpdateId]
  
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <AddModal updateId={updateId} setShowModal={setShowModal} setFormData={setFormData} setIsEdit={setIsEdit} formData={formData} isEdit={isEdit} showModal={showModal} activity={activity} link={link}/>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/upstairs' render={(props) => <Upstairs {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>}/>
            <Route exact path='/weights' component={Weights} />
            <Route exact path='/calendar' component={CalendarPage} />
            <Route exact path='/weights/trx' render={(props) => <Trx {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            <Route exact path='/weights/rings' render={(props) => <Rings {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            <Route exact path='/weights/free' render={(props) => <FreeWeights {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path='/week' render={(props) => <Week {...props} detailModalProps={detailModalProps} activities={activities} setActivities={setActivities}/>}/>
          </Switch>
        </Router>
        
    </ApolloProvider>
  );
}

export default App;
