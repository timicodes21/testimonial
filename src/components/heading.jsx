import React from 'react'
import { Container } from 'react-bootstrap';

const Heading = () => {
  return (
    <div className='shadow-sm pt-3 d-none d-md-block'>
        <Container className="px-md-5 ">
            <div className="d-flex justify-content-between">
                <p className="font-13 text-black roboto p-md-1 font-400">MARKET PLACE</p>
                <p className="font-13 text-black roboto p-md-1 font-400">WHOLESALE CENTER</p>
                <p className="font-13 text-black roboto p-md-1 font-400">SELLER CENTER</p>
                <p className="font-13 text-black roboto p-md-1 font-400">INTERNSHIPS</p>
                <p className="font-13 text-black roboto p-md-1 font-400">EVENTS</p>
            </div>
        </Container>
    </div>
  )
}

export default Heading