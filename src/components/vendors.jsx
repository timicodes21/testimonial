import React, { useState } from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'

const Vendors = () => {
    const [vendors, setVendors] = useState(JSON.parse(localStorage.getItem("vendors")));
  return (
    <div>
        <Container className="pt-5">
            <Row className="gx-md-5">
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image6} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Chisom Obilor</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">In Magodo <button className="font-13 font-500 text-green bg-lgreen rounded p-2 bor">VENDOR</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image7} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Chidi Okeke</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">In Somolu <button className="font-13 font-500 text-green bg-lgreen rounded p-2 bor">VENDOR</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <Image src={Image8} fluid />
                    </div>
                    <div className="mt-2">
                        <p className="font-600 font-24 text-ashh">Adunoluwa Adeyemi</p>
                    </div>
                    <div mt-1>
                        <p className="font-500 font-15 text-ashhh">Iwo Road <button className="font-13 font-500 text-green bg-lgreen rounded p-2 bor">VENDOR</button></p>
                    </div>
                    <div mt-1>
                        <p className="font-400 font-16 text-ashhh">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                    </div>
                </div>
            </Row>
            <Row>
                { vendors.length === 0 ? "" :
                        vendors.map(vendor => <div className="col-12 col-md-4">
                        <div>
                            <Image src={Image7} fluid />
                        </div>
                        <div className="mt-2">
                            <p className="font-600 font-24 text-ashh">{vendor.firstName} {vendor.lastName}</p>
                        </div>
                        <div mt-1>
                            <p className="font-500 font-15 text-ashhh">In {vendor.city} <button className="font-13 font-500 text-green bg-lgreen rounded p-2 bor">VENDOR</button></p>
                        </div>
                        <div mt-1>
                            <p className="font-400 font-16 text-ashhh">{vendor.story}</p>
                        </div>
                    </div>)
                    }
            </Row>
        </Container>
    </div>
  )
}

export default Vendors