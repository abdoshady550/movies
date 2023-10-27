import React from 'react'
import Items from './Items'
import { Row } from 'react-bootstrap'
import  Pagination  from './Pagination';
import { Spinner } from 'react-spinner-animated';
const CardsList = ({ movies,getPage,pageCount }) => {

  return (

    <Row className="my-4 px-5 p-4 content-style">
      {movies.length >=1 ? (movies.map((mov) => {
        return (<Items key={mov.id} mov={mov} />)
      })) 
      : (<Spinner  center={true} width={"100px"} height={"300px"}/>)}
         {movies.length >= 1 ?( <Pagination pageCount={pageCount}  getPage={getPage}/> ):null}   
    </Row>
  )
}

export default CardsList