import React from 'react';
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
  return (
    <ApolloProvider client={client}>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/upstairs' component={Upstairs} />
            <Route exact path='/weights' component={Weights} />
            <Route exact path='/calendar' component={CalendarPage} />
            <Route exact path='/weights/trx' component={Trx} />
            <Route exact path='/weights/rings' component={Rings} />
            <Route exact path='/weights/free' component={FreeWeights} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
    </ApolloProvider>
  );
}

export default App;
