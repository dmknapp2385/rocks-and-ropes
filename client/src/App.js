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
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddModal from './Components/AddModal';

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
  const [showModal, setShowModal] = useState(false);
  const [activity, setActivity] = useState('');
  const[link, setlink] = useState('');

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <AddModal setShowModal={setShowModal}  showModal={showModal} activity={activity} link={link} />
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/upstairs' render={(props) => <Upstairs {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>}/>
            <Route exact path='/weights' component={Weights} />
            <Route exact path='/calendar' component={CalendarPage} />
            <Route exact path='/weights/trx' render={(props) => <Trx {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            <Route exact path='/weights/rings' render={(props) => <Rings {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            <Route exact path='/weights/free' render={(props) => <FreeWeights {...props} setShowModal={setShowModal} setActivity={setActivity} setlink={setlink}/>} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
        
    </ApolloProvider>
  );
}

export default App;
