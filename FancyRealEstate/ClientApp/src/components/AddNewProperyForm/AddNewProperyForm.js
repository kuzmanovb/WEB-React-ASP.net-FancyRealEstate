/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'
import * as Yup from 'yup'
import './AddNewProperyForm.css'
import { ImageFromCloudinary } from '../Cloudinary/ImageFromCloudinary'
import { AddressRow } from './FormComponents/AddressRow'
import { PropertyTypeForm } from './FormComponents/PropertyTypeForm'
import { CloudinaryWidget } from './FormComponents/CloudinaryWidget'
import { BuildingTypeForm } from './FormComponents/BuildingTypeForm'
import { FeaturesForm } from './FormComponents/FeaturesForm'
import * as propertyService from '../../services/propertyService'
import * as imageService from '../../services/imageService'

const validationSchema = Yup.object().shape({

    city: Yup.string().min(2).required("You have choose city"),
    district: Yup.string().min(2).required("You have choose district"),
    street: Yup.string().min(4).required("Please imput street name"),
    buildingNumber: Yup.string().min(1).required("Please imput street number"),
    propertyType: Yup.string().min(2).required("You have choose property type"),
    year: Yup.string().min(4).required("Please input year between 1900 and present year"),
    size: Yup.string().min(2).required("Please input size"),
    floor: Yup.string().min(1).required("Please input floor"),
    totalNumberOfFloor: Yup.string().min(1).required("Please input of total floors"),
    typeOfDeal: Yup.string().min(2).required("You have choose type of deal"),
    price: Yup.string().min(2).max(7).required("Please input price"),
    buildingType: Yup.string().min(2).required("You have choose building type"),
    description: Yup.string().min(10, "Description must have at least 10 characters")
        .max(1000, "Description can't be longer than 1000 characters")
        .required("Please write short information about the property"),
    imageIds: Yup.array().min(1, "You must have not less of one photo"),

});


export class AddNewProperyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            id: "0",
            city: "",
            district: "",
            street: "",
            buildingNumber: "",
            propertyType: "",
            year: "",
            size: "",
            floor: "",
            totalNumberOfFloor: "",
            typeOfDeal: "",
            price: "",
            buildingType: "",
            features: [],
            description: "",
            imageIds: [],
            update: false,
        }
    }

    componentDidUpdate() {

        if (this.props.location.state.data !== undefined && !this.state.update) {
            this.setState((s) => ({ id: s.id + this.props.location.state.data.id}));
            this.setState((s) => ({ year: s.year + this.props.location.state.data.year }));
            this.setState((s) => ({ size: s.size + this.props.location.state.data.size }));
            this.setState((s) => ({ floor: s.floor + this.props.location.state.data.floor }));
            this.setState((s) => ({ totalNumberOfFloor: s.totalNumberOfFloor + this.props.location.state.data.totalNumberOfFloor }));
            this.setState((s) => ({ typeOfDeal: s.typeOfDeal + this.props.location.state.data.typeOfDeal }));
            this.setState((s) => ({ price: s.price + this.props.location.state.data.price }));
            this.setState((s) => ({ description: s.v + this.props.location.state.data.description }));
            this.setState({ update: true });
        }

        if (this.state.userId === "") {

            this.setState({ userId: this.props.location.state.userId })
        }

        console.log(this.state)
        console.log(this.props.location.state.token)

    }


    addressDataFronChild = (city, district, street, number) => {
        this.setState({ city: city });
        this.setState({ district: district });
        this.setState({ street: street });
        this.setState({ buildingNumber: number });
    }

    propertyTypeDateFromChild = (propertyType) => {
        this.setState({ propertyType: propertyType })
    }

    buildingTypeDataFromChild = (buildingType) => {
        this.setState({ buildingType: buildingType })
    }

    featuresDataFromChild = (features) => {
        this.setState({ features: features })
    }

    imagesIdDateFromChild = (imageId) => {
        this.setState((s) => ({ imageIds: imageId }));
    }

    handleStateValue = (e) => {

        let propName = e.target.name;
        let propValue = e.target.value;

        this.setState({ [propName]: propValue });

    };

    redirect = () => {
        this.props.history.push("/dashboard");
    }

    deleteImage = (e) => {

        e.persist();

        imageService.deleteImage(e.target.value)
        this.setState((prevState) => ({ imageIds: prevState.imageIds.filter((feature) => feature !== e.target?.value) }));
    }

    render() {

        return (

            <div className="container">
                <Formik
                    enableReinitialize
                    initialValues={this.state}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {

                        setSubmitting(true);

                        if (this.state.update) {
                            propertyService.updateProperty(values, this.props.location.state.token );
                        }
                        else {
                            propertyService.createProperty(values, this.props.location.state.token);
                        }

                        setTimeout(() => { this.redirect() }, 1000);
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
                            <AddressRow addressData={this.addressDataFronChild} passProps={this.props.location?.state.data} passBlur={handleBlur} passTouched={touched} passErrors={errors} />
                            <Row form>
                                <Col md={4}>
                                    <PropertyTypeForm propertyTypeData={this.propertyTypeDateFromChild} passProps={this.props.location.state.data} passTouched={touched} passErrors={errors} />
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="year">Year</Label>
                                        <Input type="number" name="year" id="year" min={1900} max={2021} value={values.year} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.year && errors.year ? <div className="text-danger">{errors.year}</div> : null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="number" name="size" id="size" min={0} value={values.size} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.size && errors.size ? <div className="text-danger">{errors.size}</div> : null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="floor">Floor</Label>
                                        <Input type="number" name="floor" id="floor" min={0} value={values.floor} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.floor && errors.floor ? <div className="text-danger">{errors.floor}</div> : null}
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="totalNumberOfFloor">Of Total Floors</Label>
                                        <Input type="number" name="totalNumberOfFloor" id="totalNumberOfFloor" min={0} value={values.totalNumberOfFloor} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.totalNumberOfFloor && errors.totalNumberOfFloor ? <div className="text-danger">{errors.totalNumberOfFloor}</div> : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="typeOfDeal">Type Of Deal</Label>
                                        <Input type="select" name="typeOfDeal" id="typeOfDeal" value={values.typeOfDeal} onChange={this.handleStateValue} onBlur={handleBlur}>
                                            <option value="">Choose Deal</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sale">Sale</option>
                                        </Input>
                                        {touched.typeOfDeal && errors.typeOfDeal ? <div className="text-danger">{errors.typeOfDeal}</div> : null}
                                    </FormGroup>

                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="price">Price</Label>
                                        <Input type="number" name="price" id="price" min={0} value={values.price} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.price && errors.price ? <div className="text-danger">{errors.price}</div> : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form className="row justify-content-around">
                                <Col md={2}>
                                    <BuildingTypeForm buildingTypeData={this.buildingTypeDataFromChild} passProps={this.props.location.state.data} passTouched={touched} passErrors={errors} />
                                </Col>
                                <Col md={4}>
                                    <FeaturesForm featuresData={this.featuresDataFromChild} passProps={this.props.location.state.data} passTouched={touched} passErrors={errors} />
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                {this.state.imageIds.map((i) => (
                                    <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                                        <ImageFromCloudinary publicId={i} />
                                        { this.state.imageIds.length > 1 &&
                                            <Button color="danger" value={i} onClick={this.deleteImage}>Delete Image</Button>
                                        }
                                    </div>
                                ))}
                            </Row>
                            <CloudinaryWidget imagesIdData={this.imagesIdDateFromChild} passProps={this.props.location.state.data} passTouched={touched} passErrors={errors} />
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input type="textarea" name="description" id="description" rows="10" value={this.state.description} onChange={this.handleStateValue} onBlur={handleBlur} />
                                        {touched.description && errors.description ? <div className="text-danger">{errors.description}</div> : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" color="primary" size="lg" disabled={isSubmitting} >{this.state.update ? "Edit Property" : "Add Property"}</Button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-5"></div>
            </div >
        );
    }
}