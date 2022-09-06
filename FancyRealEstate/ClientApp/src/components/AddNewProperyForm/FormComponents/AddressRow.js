/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

import * as countriesTypeService from '../../../services/countryService'
import * as cityTypeService from '../../../services/cityService'
import * as districtTypeService from '../../../services/districtService'


export const AddressRow = (props) => {

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        countriesTypeService.getAll().then(res => setCountries(res));
    }, []);

    useEffect(() => {
        setCountry(props.passProps?.country)
        if (props.passProps?.country) {
            cityTypeService.getByCountry(props.passProps?.country).then(res => setCities(res));
        }
        setCity(props.passProps?.city)
        if (props.passProps?.city) {
            districtTypeService.getByCity(props.passProps?.city).then(res => setDistricts(res))
        }
        setDistrict(props.passProps?.district)
        setStreet(props.passProps?.street)
        setNumber(props.passProps?.buildingNumber)

    }, [props.passProps]);

    useEffect(() => {
        sendData();
    }, [country, city, district, street, number]);

    const sendData = () => {
        props.addressData(country, city, district, street, number);
    }

    const handleCountry = (e) => {
        setCountry(e.target.value);
        cityTypeService.getByCountry(e.target.value).then(res => setCities(res));
        setDistricts([])
    }

    const handleCity = (e) => {
        setCity(e.target.value);
        districtTypeService.getByCity(e.target.value).then(res => setDistricts(res))
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
            <Col md={4}>
                <FormGroup>
                    <Label for="country">Country</Label>
                    <Input type="select" name="country" id="country" value={country} onChange={handleCountry} onBlur={props.passBlur} >
                        <option value="">Choose Country</option>
                        {countries.map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}

                    </Input>
                    {props.passTouched.country && props.passErrors.country ? <div className="text-danger">{props.passErrors.country}</div> : null}
                </FormGroup>
            </Col>

            <Col md={4}>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="select" name="city" id="city" value={city} onChange={handleCity} onBlur={props.passBlur} >
                        <option value="">{cities.length > 0 ? "Choose City" : ""}</option>
                        {cities?.map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}

                    </Input>
                    {props.passTouched.city && props.passErrors.city ? <div className="text-danger">{props.passErrors.city}</div> : null}
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="district">District</Label>
                    <Input type="select" name="district" id="district" value={district} onChange={handleDistrict} onBlur={props.passBlur}>
                        <option value="">{cities.length > 0 ? "Choose District" : ""}</option>
                        {districts?.map(d =>
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
                    {props.passTouched.buildingNumber && props.passErrors.buildingNumber ? <div className="text-danger">{props.passErrors.buildingNumber}</div> : null}
                </FormGroup>
            </Col>
        </Row>
    )

}

