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
    breed?
    <Query query={GET_DOG_PHOTO} variables={{breed}}>
    {({loading,error,data})=>{
        if(loading) return <p>loading...</p>
        if(error) return <p>error</p>;
        console.log(data);
        return <img src={data.dog.displayImage} 
        alt="dog"/>
    }}
    </Query>:<p>Select a breed</p>
)
export default DogPhoto;