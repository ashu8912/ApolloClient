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
//refetch is another argument to render prop function
//which helps us reload the query on an event rather 
//at every certain interval
//we just have to call the refetch function on an event
/*
{({ loading, error, data, refetch }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      );
    }}
*/
const DogPhoto=({breed})=>(
    breed?
    <Query query={GET_DOG_PHOTO} variables={{breed}}
    >
    {({loading,error,data,startPolling,stopPolling})=>{
        if(loading) return <p>loading...</p>
        if(error) return <p>error...</p>;
        console.log(data);
        return <div><img src={data.dog.displayImage} 
        alt="dog"/></div>
    }}
    </Query>:<p>Select a breed</p>
)
export default DogPhoto;