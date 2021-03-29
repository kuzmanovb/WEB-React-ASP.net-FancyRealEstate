/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'
import { CloudinaryWidget } from './CloudinaryWidget'
import './AddNewProperyForm.css'


export class AddNewProperyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }


    }

    render() {

        return (

            <div className="container">
                <Formik
                    initialValues={{ sity: "", district: "", street: "", number: "", propertyType: "", year: "", size: "", floor: "", ofTotalFloor: "", typeOfDeal: "", buildingType: "", features: [], description: "" }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        // When button submits form and form is in the process of submitting, submit button is disabled
                        setSubmitting(true);
            
                        // Simulate submitting to database, shows us values submitted, resets form
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                      }, 500);
                    }}
                >
                    {({ values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting }) => (
                        <Form className="mt-5" onSubmit={handleSubmit}>
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="sity">Sity</Label>
                                        <Input type="select" name="sity" id="sity" value={values.sity} onChange={handleChange} >
                                            <option value="">Choose Sity</option>
                                            <option value="sofia">Sofia</option>
                                            <option value="plovdiv">Plovdiv</option>
                                            <option value="varna">Varna</option>
                                            <option value="razlok">Razlok</option>
                                            <option value="pleven">Pleven</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="district">District</Label>
                                        <Input type="select" name="district" id="district" value={values.district} onChange={handleChange}>
                                            <option value="">Choose District</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label for="street">Street</Label>
                                        <Input type="text" name="street" id="street" placeholder="Write street name" defaultValue={values.street} onChange={handleChange} onBlur={handleBlur} />
                                    </FormGroup>
                                </Col>
                                <Col md={1}>
                                    <FormGroup>
                                        <Label for="number">Str.Number</Label>
                                        <Input type="number" name="number" id="number" min={0} defaultValue={values.number} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="propertyType">Property Type</Label>
                                        <Input type="select" name="propertyType" id="propertyType" value={values.propertyType} onChange={handleChange}>
                                            <option value="">Choose Property Type</option>
                                            <option value="1 room">1 Room</option>
                                            <option value="2 rooms">2 Rooms</option>
                                            <option value="3 rooms">3 Rooms</option>
                                            <option value="house">House</option>

                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="year">Year</Label>
                                        <Input type="number" name="year" id="year" min={1900} max={2021} defaultValue={values.year} onChange={handleChange} onBlur={handleBlur} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="number" name="size" id="size" min={0} defaultValue={values.size} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="floor">Floor</Label>
                                        <Input type="number" name="floor" id="floor" min={0} defaultValue={values.floor} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="ofTotalFloors">Of Total Floors</Label>
                                        <Input type="number" name="ofTotalFloors" id="ofTotalFloors" min={0} defaultValue={values.floor} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 2, offset: 5 }}>
                                    <FormGroup>
                                        <Label for="typeOfDeal">Type Of Deal</Label>
                                        <Input type="select" name="typeOfDeal" id="typeOfDeal" defaultValue={values.typeOfDeal}>
                                            <option value="">Choose Deal</option>
                                            <option value="forRent">For Rent</option>
                                            <option value="forDeal">For Deal</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form className="row justify-content-around">
                                <Col md={2}>

                                    <FormGroup tag="fieldset" onChange={handleChange}>
                                        <legend className="col-form-label"><b>Buildin Type</b></legend>
                                        <FormGroup check inline>
                                            <Label for="buildingType">
                                                <Input type="radio" name="buildingType" id="buildingType" value="Brick" />
                                      Brick
                                    </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label >
                                                <Input type="radio" name="buildingType" id="buildingType" value="Panel" />
                                      Panel
                                    </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label >
                                                <Input type="radio" name="buildingType" id="buildingType" value="EPK" />
                                      EPK
                                    </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label >
                                                <Input type="radio" name="buildingType" id="buildingType" value="PK" />
                                      PK
                                    </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup tag="fieldset" onChange={handleChange}>
                                        <legend className="col-form-label"><b>Features</b></legend>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="internet"/> Internet
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="healting"/> Healting
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="securitySystem"/> Security System
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="airCondition"/> Air Condition
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="garage"/> Garage
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="elevator"/> Elevator
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="Renovated"/> Renovated
                                </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <CloudinaryWidget />
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input type="textarea" name="description" id="description" rows="10" onChange={handleChange} onBlur={handleBlur}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" color="primary" size="lg" disabled={isSubmitting} >Add Property</Button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-5"></div>
            </div >
        );
    }
}