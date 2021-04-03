/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'
import * as Yup from 'yup'
import './AddNewProperyForm.css'
import { AddressRow } from './FormComponents/AddressRow'
import { PropertyTypeForm } from './FormComponents/PropertyTypeForm'
import { CloudinaryWidget } from './FormComponents/CloudinaryWidget'
import { BuildingTypeForm } from './FormComponents/BuildingTypeForm'
import { FeaturesForm } from './FormComponents/FeaturesForm'

const validationSchema =  Yup.object().shape({

    city: Yup.string().min(2).required( "You have choose city"),
    district: Yup.string().min(2).required( "You have choose district"),
    street: Yup.string().min(5).required( "Please imput street name"),
    number: Yup.string().min(5).required( "Please imput street number"),
    propertyType: Yup.string().min(2).required( "You have choose property type"),
    year: Yup.string().min(4).required("Please input year between 1900 and present year"),
    size: Yup.string().min(2).required("Please input size"),
    floor: Yup.string().min(2).required( "Please input floor"),
    ofTotalFloors: Yup.string().min(2).required( "Please input of total floors"),
    typeOfDeal: Yup.string().min(2).required( "You have choose type of deal"),
    buildingType: Yup.string().min(2).required( "You have choose building type"),
    description: Yup.string().min(10, "Description must have at least 10 characters")
                             .max(100, "Description can't be longer than 100 characters")
                             .required("Please write short information about the property"),
    imageIds: Yup.array().min(1, "You must have not less of one photo"),

});


export class AddNewProperyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            district: "",
            street: "",
            number: "",
            propertyType: "",
            year: "",
            size: "",
            floor: "",
            ofTotalFloors: "",
            typeOfDeal: "",
            buildingType: "",
            features: [],
            description: "",
            imageIds: [],
            imageUrls: []
        }
    }

    addressDataFronChild = (city, district, street, number) => {
        this.setState({ city: city });
        this.setState({ district: district });
        this.setState({ street: street });
        this.setState({ number: number });
    }

    propertyTypeDateFromChild = (propertyType) => {
        this.setState({ propertyType: propertyType })
    }

    buildingTypeDataFromChild = (buildingType) => {
        this.setState({ buildingType: buildingType })
    }

    featuresDataFromChild = (features) =>{
        this.setState({features: features})
    }

    imagesUrlDateFromChild = (imageUrl) => {
        this.setState((s) => ({ imageUrls: [...s.imageUrls, ...imageUrl] }));
    }
    imagesIdDateFromChild = (imageId) => {
        this.setState((s) => ({ imageIds: [...s.imageIds, ...imageId] }));
    }

    handleStateValue = (e) =>{

        let propName = e.target.name;
        let propValue = e.target.value;

        this.setState({[propName]: propValue});

    };

    render() {

        return (

            <div className="container">
                <Formik
                    enableReinitialize
                    initialValues={this.state}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
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
                            <AddressRow addressData={this.addressDataFronChild} passBlur={handleBlur} passTouched={touched} passErrors={errors}/>
                            <Row form>
                                <Col md={4}>
                                    <PropertyTypeForm propertyTypeData={this.propertyTypeDateFromChild} passTouched={touched} passErrors={errors} />
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="year">Year</Label>
                                        <Input type="number" name="year" id="year" min={1900} max={2021} value={values.year} onChange={this.handleStateValue} onBlur={handleBlur}/>
                                        {touched.year && errors.year ? <div className="text-danger">{errors.year}</div>: null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="number" name="size" id="size" min={0} value={values.size} onChange={this.handleStateValue} onBlur={handleBlur}/>
                                        {touched.size && errors.size ? <div className="text-danger">{errors.size}</div>: null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="floor">Floor</Label>
                                        <Input type="number" name="floor" id="floor" min={0} value={values.floor} onChange={this.handleStateValue} onBlur={handleBlur}/>
                                        {touched.floor && errors.floor ? <div className="text-danger">{errors.floor}</div>: null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="ofTotalFloors">Of Total Floors</Label>
                                        <Input type="number" name="ofTotalFloors" id="ofTotalFloors" min={0} value={values.ofTotalFloors} onChange={this.handleStateValue} onBlur={handleBlur}/>
                                        {touched.ofTotalFloors && errors.ofTotalFloors ? <div className="text-danger">{errors.ofTotalFloors}</div>: null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 2, offset: 5 }}>
                                    <FormGroup>
                                        <Label for="typeOfDeal">Type Of Deal</Label>
                                        <Input type="select" name="typeOfDeal" id="typeOfDeal" value={values.typeOfDeal} onChange={this.handleStateValue} onBlur={handleBlur}>
                                            <option value="">Choose Deal</option>
                                            <option value="forRent">For Rent</option>
                                            <option value="forDeal">For Deal</option>
                                        </Input>
                                        {touched.typeOfDeal && errors.typeOfDeal ? <div className="text-danger">{errors.typeOfDeal}</div>: null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form className="row justify-content-around">
                                <Col md={2}>
                                    <BuildingTypeForm buildingTypeData={this.buildingTypeDataFromChild} passTouched={touched} passErrors={errors}/>
                                </Col>
                                <Col md={4}>
                                  <FeaturesForm featuresData={this.featuresDataFromChild} passTouched={touched} passErrors={errors}/>
                                </Col>
                            </Row>
                            <CloudinaryWidget imagesIdData={this.imagesIdDateFromChild} imagesUrlData={this.imagesUrlDateFromChild} passTouched={touched} passErrors={errors}/>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input type="textarea" name="description" id="description" rows="10" onChange={this.handleStateValue} onBlur={handleBlur}/>
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