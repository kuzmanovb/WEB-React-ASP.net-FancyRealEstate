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

    useEffect(() =>{

        if(props.passProps?.elevator){setFeature((prevState) => [...prevState, "elevator"])}
        if(props.passProps?.securitySystem){setFeature((prevState) => [...prevState, "securitySystem"])}
        if(props.passProps?.renovated){setFeature((prevState) => [...prevState, "renovated"])}
        if(props.passProps?.internet){setFeature((prevState) => [...prevState, "internet"])}
        if(props.passProps?.heating){setFeature((prevState) => [...prevState, "heating"])}
        if(props.passProps?.garage){setFeature((prevState) => [...prevState, "garage"])}
        if(props.passProps?.airCondition){setFeature((prevState) => [...prevState, "airCondition"])}

    },[])


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
                    <Input type="checkbox" name="features" id="features" value="internet" onChange={handleFeature} defaultChecked={props.passProps?.internet} /> Internet
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="healting" onChange={handleFeature} defaultChecked={props.passProps?.healting}/> Healting
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="securitySystem" onChange={handleFeature} defaultChecked={props.passProps?.securitySystem}/> Security System
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="airCondition" onChange={handleFeature} defaultChecked={props.passProps?.airCondition}/> Air Condition
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="garage" onChange={handleFeature} defaultChecked={props.passProps?.garage}/> Garage
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="elevator" onChange={handleFeature} defaultChecked={props.passProps?.elevator}/> Elevator
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input type="checkbox" name="features" id="features" value="renovated" onChange={handleFeature} defaultChecked={props.passProps?.renovated}/> Renovated
                </Label>
            </FormGroup>
        </FormGroup>

    );

}