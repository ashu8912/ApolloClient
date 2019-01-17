import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
const Dog=(props)=>(
    <Query 
    query={gql`
    {dogs{
        id
        breed
    }
    }
    `}>
    {({loading,error,data})=>{
        if(loading) return <p>Loading...</p>
        if(error)  return <p>{error.message}</p>
        return <select onChange={props.onDogChange}>
        {data.dogs.map((dog)=>(
            <option key={dog.id}>{dog.breed}</option>
        ))
        }
        </select>
    }}
    
    </Query>
)
export default Dog;