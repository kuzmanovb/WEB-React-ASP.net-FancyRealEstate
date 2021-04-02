import React, { useState, useEffect } from 'react'
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

import * as cityTypeService from '../../services/cityService'
import * as districtTypeService from '../../services/districtService'


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

        sendData();
        console.log(city + " " + district)

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
                    <Input type="select" name="city" id="city" value={city} onChange={handleCity} >
                        <option value="">Choose City</option>
                        {cities.map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}

                    </Input>
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="district">District</Label>
                    <Input type="select" name="district" id="district" value={district} onChange={handleDistrict} >
                        <option value="">Choose District</option>
                        {districts.map(d =>
                            <option key={d} value={d}>{d}</option>
                        )}
                    </Input>
                </FormGroup>
            </Col>
            <Col md={5}>
                <FormGroup>
                    <Label for="street">Street</Label>
                    <Input type="text" name="street" id="street" placeholder="Write street name" value={street} onChange={handleStreet} />
                </FormGroup>
            </Col>
            <Col md={1}>
                <FormGroup>
                    <Label for="number">Str.Number</Label>
                    <Input type="number" name="number" id="number" min={0} value={number} onChange={handleNumber} />
                </FormGroup>
            </Col>
        </Row>
    )

}

