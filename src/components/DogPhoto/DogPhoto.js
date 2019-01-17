import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
const DogPhoto=({breed})=>(
    <Query query={GET_DOG_PHOTO} variables={{breed}}>
    {({loading,error,data})=>{
        if(loading) return <p>loading...</p>
        if(error) return null
        return <img src={data.dog.displayImage} 
        alt="dog" style={{ height: 100, width: 100 }}/>
    }}
    </Query>
)