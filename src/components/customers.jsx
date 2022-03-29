import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'

const Customers = () => {
    if(JSON.parse(localStorage.getItem("customers"))){
        var customers = JSON.parse(localStorage.getItem("customers"));
    } else{
        var customers = [];
    }
    
  return (
    <div>
        <Container className="pt-5">
            <Row className="gx-md-5">
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image3} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Joseph Ike</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">In Ikeja <button className="font-13 font-500 text-blue bg-llgreen rounded p-2 bor">CUSTOMER</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image4} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Adetola Fashina</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">Ibadan <button className="font-13 font-500 text-blue bg-llgreen rounded p-2 bor">CUSTOMER</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enimvelit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image5} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Emmanuel Fayemi</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">In Akoka <button className="font-13 font-500 text-blue bg-llgreen rounded p-2 bor">CUSTOMER</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                </div>
            </Row>
            <Row>
                { customers.length === 0 ? "" :
                    customers.map(customer => <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image3} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">{customer.firstName} {customer.lastName}</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">In {customer.city} <button className="font-13 font-500 text-blue bg-llgreen rounded p-2 bor">CUSTOMER</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">{customer.story}</p>
                    </div>
                </div>)
                }
            </Row>
        </Container>
    </div>
  )
}

export default Customers