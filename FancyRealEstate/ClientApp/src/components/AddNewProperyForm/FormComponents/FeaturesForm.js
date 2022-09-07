/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import * as featureService from '../../../services/featureService';

export const FeaturesForm = (props) => {

    const [testFeatures, setTestFeatures] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        featureService.getAll().then(res => setTestFeatures(res));
    }, [])

    useEffect(() => {
        sendData();
    }, [features]);

    const sendData = () => {
        props.featuresData(features);
    }

    useEffect(() => {
        setFeatures(props.passProps?.features);
    },[])

    const handleFeature = (e) => {

        e.persist();
        if (e.target.checked) {
            setFeatures((prevState) => [...prevState, e.target.value]);
        }
        else {
            setFeatures((prevState) => prevState.filter((feature) => feature !== e.target.value));
        }
    };

    return (

        <FormGroup tag="fieldset" >
            <legend className="col-form-label"><b>Features</b></legend>
            {testFeatures?.map((feture, index) => {

                return (
                    <FormGroup check inline key={index}>
                        <Label check>
                            <Input type="checkbox" name={feture} id={`feature-${index}`} value={feture} onChange={handleFeature} defaultChecked={props.passProps?.features.includes(feture)} /> {feture}
                        </Label>
                    </FormGroup>
                    )
            })}
        </FormGroup>

    );
}