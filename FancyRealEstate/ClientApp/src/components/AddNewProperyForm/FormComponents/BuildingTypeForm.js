/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import * as buildingTypeService from '../../../services/buildingTypeService'

export const BuildingTypeForm = (props) => {

    const [buildingTypes, setBuildingTypes] = useState([]);
    const [buildingType, setBuildingType] = useState("");

    useEffect(() => {

        buildingTypeService.getAll().then(res => { setBuildingTypes(res) });

    }, []);

    useEffect(() =>{

        sendData();

    },[buildingType]);

    const sendData = () => {

        props.buildingTypeData(buildingType)

    }


    const handleBuildingType = (e) => {

        setBuildingType(e.target.value);

    }



    return (
        <FormGroup tag="fieldset" onChange={handleBuildingType}>
            <legend className="col-form-label"><b>Buildin Type</b></legend>
            {buildingTypes.map(b =>
                <FormGroup check inline key={b}>
                    <Label for="buildingType">
                        <Input type="radio" name="buildingType" id="buildingType" value={b} /> {b}
                    </Label>
                </FormGroup>
            )}
        </FormGroup>
    );


};