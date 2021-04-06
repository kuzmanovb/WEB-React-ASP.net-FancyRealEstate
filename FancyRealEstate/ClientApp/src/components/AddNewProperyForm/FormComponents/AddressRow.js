/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

import * as cityTypeService from '../../../services/cityService'
import * as districtTypeService from '../../../services/districtService'


export const AddressRow = (props) => {

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {

        cityTypeService.getAll().then(res => setCities(res));
        districtTypeService.getAll().then(res => setDistricts(res))

    }, []);

    useEffect(() => {
        setCity(props.passProps?.city)
        setDistrict(props.passProps?.district)
        setStreet(props.passProps?.street)
        setNumber(props.passProps?.buildingNumber)
    }, [props.passProps]);

    useEffect(() => {

        sendData();
        console.log("from Address")
        console.log(city)
        

    }, [city, district, street, number]);

    const sendData = () => {

        props.addressData(city, district, street, number);

    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleDistrict = (e) => {
        setDistrict(e.target.value);
    }

    const handleStreet = (e) => {
        setStreet(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }


    return (

        <Row form>
            <Col md={3}>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="select" name="city" id="city" value={city} onChange={handleCity} onBlur={props.passBlur} >
                        <option value="">Choose City</option>
                        {cities.map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}

                    </Input>
                    {props.passTouched.city && props.passErrors.city ? <div className="text-danger">{props.passErrors.city}</div> : null}
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="district">District</Label>
                    <Input type="select" name="district" id="district" value={district} onChange={handleDistrict} onBlur={props.passBlur}>
                        <option value="">Choose District</option>
                        {districts.map(d =>
                            <option key={d} value={d}>{d}</option>
                        )}
                    </Input>
                    {props.passTouched.district && props.passErrors.district ? <div className="text-danger">{props.passErrors.district}</div> : null}
                </FormGroup>
            </Col>
            <Col md={5}>
                <FormGroup>
                    <Label for="street">Street</Label>
                    <Input type="text" name="street" id="street" placeholder="Write street name" value={street || ""} onChange={handleStreet} onBlur={props.passBlur} />
                    {props.passTouched.street && props.passErrors.street ? <div className="text-danger">{props.passErrors.street}</div> : null}
                </FormGroup>
            </Col>
            <Col md={1}>
                <FormGroup>
                    <Label for="number">Str.Number</Label>
                    <Input type="number" name="number" id="number" value={number || ""} onChange={handleNumber} onBlur={props.passBlur} />
                    {props.passTouched.number && props.passErrors.number ? <div className="text-danger">{props.passErrors.number}</div> : null}
                </FormGroup>
            </Col>
        </Row>
    )

}

