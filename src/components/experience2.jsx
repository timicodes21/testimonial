import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import Image9 from '../assets/image2.png'
import { Link } from 'react-router-dom';

const Experience2 = () => {
  return (
    <div className='bg-pink'>
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-md-none">
                    <div className="pt-5">
                        <div className="rounded-circle bg-piink img-circle">
                            <Image className="rounded-circle" src={Image9} fluid />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <div>
                        <h4 className="font-32 font-700 text-black d-none d-md-block">Josiah's Experience</h4>
                        <p className="font-24 font-600 text-black d-md-none mt-5">Victoria's Experience</p>
                        <button className="font-13 font-500 text-orange bg-transparent rounded p-2 bor2">CUSTOMER</button>
                        <p className="font-18 font-400 text-black pt-3">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                        <Link to="/story" className="font-16 mt-4 p-2 font-500 text-orange bg-transparent share-button2">SHARE YOUR OWN STORY!</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="px-5 pt-5">
                        <div className="rounded-circle bg-piink p-1 img-circle">
                            <Image src={Image9} fluid />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Experience2