import React, { useState } from 'react'
import { Container, Row, Form, Image } from 'react-bootstrap';
import useLocalStorage from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import Celeb from '../assets/celeb.png'
import { GrClose } from 'react-icons/gr';

const Story = () => {
    const [display, setDisplay] = useState(false);
    const [show, setShow] = useState(true)
    const [image, setImage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [story, setStory] = useState('')
    const [category, setCategory] = useState('customer')
    const [city, setCity] = useState('')
    const [customers, setCustomers] = useLocalStorage("customers", [])
    const [vendors, setVendors] = useLocalStorage("vendors", [])
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        const newPerson = { image, firstName, lastName, story, category, city } 
        console.log(newPerson)
        if(newPerson.category === "customer"){
            const nextId = customers.length > 0 ? Math.max(...customers.map(l => l.id)) + 1 : 0
            const newPerson = {id: nextId, image, firstName, lastName, story, category, city}
            setCustomers([...customers, newPerson]);
            console.log(customers)
        } else{
            const nextId = vendors.length > 0 ? Math.max(...vendors.map(l => l.id)) + 1 : 0
            const newPerson = {id: nextId, image, firstName, lastName, story, category, city}
            setVendors([...vendors, newPerson]);
            console.log(vendors)
        }
        alert('saved')
        setDisplay(true);
        setShow(false)
    }

    const handleClose = () => {
        navigate('/')
    }

    const handleClose2 = () => {
        navigate(-1)
    }

  return (
    <div>
        <Container className="my-3">
            {show && <Form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-end my-3">
                    <GrClose onClick={handleClose2} className="text-orange close-icon" />
                </div>
                <div className="text-center mt-5">
                    <h4 className="font-700 font-28 text-dark">Share your amazing story!</h4>
                </div>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Upload your picture</p></Form.Label>
                        <Form.Control value={image} onChange={e => setImage(e.target.value)} className="story-input p-3" type="file" placeholder="Choose image" />
                    </Form.Group>
                </Row>
                <Row>
                    <div className="col-12 col-md-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">First Name</p></Form.Label>
                            <Form.Control required value={firstName} onChange={e => setFirstName(e.target.value)} className="story-input p-3" type="text" placeholder="" />
                        </Form.Group>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Last Name</p></Form.Label>
                            <Form.Control required value={lastName} onChange={e => setLastName(e.target.value)} className="story-input p-3" type="text" placeholder="" />
                        </Form.Group>
                    </div>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">Share your story</p></Form.Label>
                        <Form.Control required value={story} onChange={e => setStory(e.target.value)} className="story-input" as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                <Row>
                    <div className="col-12 col-md-4">
                        <p className="font-14 text-ashhhh pt-1 font-400 roboto">What did you interact with Vasiti as?</p>
                    </div>
                    <div className="col-6 col-md-4">
                        <input type="radio" id="customer" checked name="category" value="customer" onChange={e => setCategory(e.target.value)} />
                        <label for="customer"><p className="font-14 text-ashhhh pt-1 ps-1 font-400 roboto">Customer</p></label>
                    </div>
                    <div className="col-6 col-md-4">
                        <input type="radio" id="vendor" name="category" value="vendor" onChange={e => setCategory(e.target.value)} />
                        <label for="vendor"><p className="font-14 text-ashhhh pt-1 ps-1 font-400 roboto">Vendor</p></label>
                    </div>
                    
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><p className="font-14 text-ashhhh pt-1 font-400 roboto">City or Higher Institution (for Students)</p></Form.Label>
                        <Form.Control value={city} onChange={e => setCity(e.target.value)} className="story-input p-3" type="text" placeholder="" />
                    </Form.Group>
                </Row> 
                <Row>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-6">
                        <button type="submit" className="font-20 w-100 font-600 text-white bg-orange rounded p-2 bor2">Share your story!</button>
                    </div>
                </Row>      
            </Form>}
            {display && <div className="text-center mt-5">
                <Row>
                    <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-6">
                        <div className="">
                            <Image src={Celeb} fluid />
                        </div>
                        <h4 className="font-700 font-28 text-dark mt-3">Thank you for sharing your story!</h4>
                        <div>
                            <p className="font-16 text-ashhhh pt-2 ps-1 font-400 roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <Row className="pt-3">
                            <div className="col-12">
                                <button onClick={handleClose} className="font-20 w-100 font-600 text-white bg-orange rounded p-2 bor2">Close</button>
                            </div>
                        </Row>    
                    </div> 
                    <div className="col-12 col-md-3"></div>
                </Row>
            </div>}
        </Container>
    </div>
  )
}

export default Story