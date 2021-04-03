/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

export const FeaturesForm = (props) => {

    const [features, setFeature] = useState([]);

    useEffect(() => {

        sendData();

    }, [features]);

    const sendData = () =>{

        props.featuresData(features);

    }

    const handleFeature = (e) => {

        e.persist();

        if (e.target.checked) {

            setFeature((prevState) => [...prevState, e.target.value]);
        }
        else {

            setFeature((prevState) => prevState.filter((feature) => feature !== e.target.value));
        }
    };


    return (

        <FormGroup tag="fieldset" >
            <legend className="col-form-label"><b>Features</b></legend>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="internet" onChange={handleFeature} /> Internet
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="healting" onChange={handleFeature} /> Healting
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="securitySystem" onChange={handleFeature} /> Security System
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="airCondition" onChange={handleFeature} /> Air Condition
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="garage" onChange={handleFeature} /> Garage
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="elevator" onChange={handleFeature} /> Elevator
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="renovated" onChange={handleFeature} /> Renovated
                </Label>
            </FormGroup>
        </FormGroup>




    );

}