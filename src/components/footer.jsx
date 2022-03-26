import React from 'react'
import { Container, Row, Image, InputGroup, FormControl } from 'react-bootstrap';
import Image16 from '../assets/image16.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="bg-llblack">
        <Container>
            <Row>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="px-5 pt-5">
                        <div className="p-5 mmmin">
                            <Image src={Image16} fluid />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-md-5 pt-5 d-flex flex-column justify-content-center">
                    <h3 className="text-white font-40 d-none d-md-block font-700">Be a  member <br />of our community 🎉</h3>
                    <h3 className="text-white font-32 d-md-none font-700">Be a  member <br />of our community 🎉</h3>
                    <p className="font-14 text-white pt-2 font-400 roboto">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                    <div>
                    <InputGroup className="mb-3 in-group bg-lll rounded">
                        <FormControl placeholder="enter your email address" className="footer-input bg-transparent p-2 text-white" aria-label="enter your email address" aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text className="input-text" id="basic-addon2"><button className="font-13 font-500 roboto text-black bg-white rounded p-3 bor3">SUBSCRIBE</button></InputGroup.Text>
                    </InputGroup>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-md-none">
                    <div className="">
                        <div className="py-5">
                            <Image src={Image16} fluid />
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="roboto">
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">Company</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">About us</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Terms of Use</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Privacy Policy</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Press & Media</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">Products</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Market Place</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Magazine</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Seller</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Wholesale</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Services</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">Careers</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Become a Campus Rep</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Become a Vasiti Influencer</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Become a Campus writer</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Become an Affiliate</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">Get in touch</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Contact us</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Partner with us</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Advertise with us</p>
                    <p className="font-14 text-white pt-1 font-400 roboto">Help/FAQs</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column justify-content-between roboto">
                    <p className="font-16 text-white pt-1 font-700 roboto">Join our community</p>
                    <div className="d-flex justify-content-between pt-2 pb-2">
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Facebook} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Instagram} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Twitter} fluid /></div>
                        <div className="rounded-circle bg-white"><Image className="p-3" src={Linkedin} fluid /></div>
                    </div>
                    <p className="font-14 text-white pt-1 font-400 roboto">Email Newsletter</p>
                </div>
            </Row>
                
                
                
        </Container>
    </div>
  )
}

export default Footer