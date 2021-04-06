import React, { useState, useEffect } from 'react'
import { ChoiceForm } from './ChoiceForm/ChoiceForm.js'
import * as cityService from '../../services/cityService'
import * as districtService from '../../services/districtService'
import * as propertyTypeService from '../../services/propertyTypeService'

import './Search.css'

export const Search = (props) => {

    const [cities, setCities] = useState([])
    const [districts, setDistricts] = useState([])
    const [propertyTypes, setPropertyTypes] = useState([])
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [propertyType, setPropertyType] = useState("")

    useEffect(() => {

        cityService.getAll().then(res => setCities(res))
        districtService.getAll().then(res => setDistricts(res))
        propertyTypeService.getAll().then(res => setPropertyTypes(res))

    }, [])

    useEffect(() => {
       
        passData()

    }, [city, district, propertyType])

    const cityFromChild = (sityName) => {
        setCity(sityName)
    }

    const districtFromChild = (sityName) => {
        setDistrict(sityName)
    }


    const propertyTypeFromChild = (sityName) => {
        setPropertyType(sityName)
    }

    const passData =() =>{

        props.getData(city, district, propertyType);
    }


    return (
        <div className="site-section site-section-sm pb-0">
            <div className="container">
                <div className="row">
                    <form className="form-search col-md-12">
                        <div className="row  align-items-end">
                            <ChoiceForm id="list-types" nameText="City" optionForChoice={cities} getData={cityFromChild} />
                            <ChoiceForm id="offer-types" nameText="District" optionForChoice={districts} getData={districtFromChild}  />
                            <ChoiceForm id="select-city" nameText="Property Type" optionForChoice={propertyTypes}getData={propertyTypeFromChild} />
                            <div className="col-md-3">
                                <input type="button" className="btn btn-success text-white btn-block rounded-0" value="Search" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
