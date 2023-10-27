import React from 'react'
import Items from './Items'
import { Row } from 'react-bootstrap'
import  Pagination  from './Pagination';
const CardsList = ({ movies,getPage,pageCount }) => {

  return (

    <Row className="my-4 px-5 p-4 content-style">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<Items key={mov.id} mov={mov} />)
      })) 
      : (<div style={{height:'20vh', backgroundColor: 'white', marginTop: '50px' }}>
         <h1 style={{ color: '#000304', textAlign: 'center', fontSize: '50px',marginTop: '50px' }}> Oops ! NOT Found 🤷</h1></div>)}
         {movies.length >= 1 ?( <Pagination pageCount={pageCount}  getPage={getPage}/> ):null}   
    </Row>
  )
}

export default CardsList