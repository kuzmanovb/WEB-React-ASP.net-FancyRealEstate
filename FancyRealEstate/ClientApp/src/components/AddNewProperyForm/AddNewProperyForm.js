/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AddNewProperyForm.css'


export class AddNewProperyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            imageId: [],
            imageUrl: []
        }


    }

    showWidget = () => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: `kuzmanovb`,
            uploadPreset: `FancyRealEstate`
        },
            (error, result) => {
                if (!error && result && result.event === "success") {

                    this.setState(state => ({
                        imageId: [...state.imageId, result.info.public_id],
                        imageUrl: [...state.imageUrl, result.info.secure_url]
                    }));
                }
            });
        widget.open()
    }

    render() {

        return (
            <div className="container">
                <Form className="mt-5">
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleSelect">Sity</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Sofia</option>
                                    <option>Plovdiv</option>
                                    <option>Varna</option>
                                    <option>Razlok</option>
                                    <option>Pleven</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleSelect">District</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="exampleCity">Street</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={1}>
                            <FormGroup>
                                <Label for="exampleCity">Number</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleSelect">Property Type</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1 Room</option>
                                    <option>2 Rooms</option>
                                    <option>3 Rooms</option>
                                    <option>House</option>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleCity">Year</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleCity">Size</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleCity">Floor</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleCity">Of Total Floors</Label>
                                <Input type="text" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 2, offset: 5 }}>
                            <FormGroup>
                                <Label for="exampleSelect">Type Of Deal</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>For Rent</option>
                                    <option>For Deal</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form className="row justify-content-around">

                        <Col md={2}>
                            <FormGroup tag="fieldset">
                                <legend className="col-form-label"><b>Buildin Type</b></legend>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                      Brick
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                      Panel
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                      EPK
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                      PK
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup tag="fieldset">
                                <legend className="col-form-label"><b>Features</b></legend>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Internet
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Healting
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Security System
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Air Condition
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Garage
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Elevator
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> Renovated
                                </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Button color="primary" size="lg" onClick={this.showWidget}>Add Images</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input type="textarea" name="text" id="exampleText" rows="10" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                <Button color="primary" size="lg" block>Add Property</Button>
                <div className="mt-5"></div>
            </div >
        );
    }
}