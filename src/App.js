import React, { Component } from 'react';
import { Query, ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import './App.css';
import Dog from './components/Dog/Dog';
import DogPhoto from './components/DogPhoto/DogPhoto';

//https://48p1r2roz4.sse.codesandbox.io
const client=new ApolloClient({
  uri:"https://dog-graphql-api.glitch.me/"
})
class App extends Component {
  state={
    breed:''
  }
  dogChangeHandler=(event)=>{
    console.log(event.target.value);
    this.setState({breed:event.target.value});
  }
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
       <Dog onDogChange={this.dogChangeHandler}/>
       <DogPhoto breed={this.state.breed}/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;







/*<Query query={gql`
{
  rates(currency: "USD") {
          currency
          rate
  }
}
`}>
{({loading,err,data})=>{
  if(err) return <p>Error :(</p>
  if(loading) return <p>loading...</p>
  return data.rates.map(({currency,rate})=>{
    return <p key={currency}>{currency}: {rate}</p>
  })  
}}
</Query>*/