/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {FormGroup, Label, Input } from 'reactstrap'
import * as propertyTypeService from '../../../services/propertyTypeService'


export const PropertyTypeForm = (props) => {

    const[propertyTypes, setPropertyTypes] = useState([]);
    const[propertyType, setPropertyType] = useState("");

    useEffect(() =>{

        propertyTypeService.getAll().then(res => {setPropertyTypes(res)});
    },[]);

    useEffect(() => {

        setPropertyType(props.passProps?.propertyType)
     
    }, [props.passProps]);


    useEffect(() =>{

        sendData();

    },[propertyType]);

    const sendData =() =>{
        props.propertyTypeData(propertyType);
    }

    const handlePropertType = (e) =>{

        setPropertyType(e.target.value)

    }

    return (
        <FormGroup>
            <Label for="propertyType">Property Type</Label>
            <Input type="select" name="propertyType" id="propertyType" value={propertyType} onChange={handlePropertType} onBlur={props.passBlur}>
                <option value="">Choose Property Type</option>
                {propertyTypes.map(p =>
                    <option value={p} key={p}>{p}</option>
                )}
            </Input>
            {props.passTouched.propertyType && props.passErrors.propertyType ? <div className="text-danger">{props.passErrors.propertyType}</div>: null}
        </FormGroup>
    );


};