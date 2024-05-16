import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import GridBackground from './components/ui/GridBackgroun.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { MdSignalCellularConnectedNoInternet4Bar } from 'react-icons/md'

const client = new ApolloClient({
  // TODO: UODATE THE URI ON PRODUCTION 
  uri: import.meta.env.VITE_NODE_ENV==="development" ? "http://localhost:4000/graphql" : "/graphql" ,
  cache: new InMemoryCache(), // Apollo client uses to cahe query results after fetching them.
  credentials:"include",  //this tells Apollo Client to send cookies along with every request to the server
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </React.StrictMode>,
)
 