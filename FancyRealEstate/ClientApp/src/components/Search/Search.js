import React, { useState, useEffect } from 'react'
import { ChoiceForm } from './ChoiceForm/ChoiceForm.js'
import * as cityService from '../../services/cityService'
import * as districtService from '../../services/districtService'
import * as propertyTypeService from '../../services/propertyTypeService'
import * as buildingTypeService from '../../services/buildingTypeService'

import './Search.css'

export const Search = (props) => {

    const [cities, setCities] = useState([])
    const [districts, setDistricts] = useState([])
    const [propertyTypes, setPropertyTypes] = useState([])
    const [buildingTypes, setBuildingTypes] = useState([])
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [buildingType, setBuildingType] = useState("")

    useEffect(() => {

        cityService.getAll().then(res => setCities(res))
        districtService.getAll().then(res => setDistricts(res))
        propertyTypeService.getAll().then(res => setPropertyTypes(res))
        buildingTypeService.getAll().then(res => setBuildingTypes(res))

    }, [])

    useEffect(() => {
       
        passData()

    }, [city, district, propertyType, buildingType])

    const cityFromChild = (sityName) => {
        setCity(sityName)
    }

    const districtFromChild = (districtName) => {
        setDistrict(districtName)
    }

    const propertyTypeFromChild = (propertyTypeName) => {
        setPropertyType(propertyTypeName)
    }

    const buildingTypeFromChild = (buildingTypeName) => {
        setBuildingType(buildingTypeName)
    }
    

    const passData =() =>{

        props.getData(city, district, propertyType, buildingType);
    }
 

    return (
        <div className="site-section site-section-sm pb-0">
            <div className="container">
                <div className="row">
                    <form className="form-search col-md-12">
                        <div className="row  align-items-end">
                            <ChoiceForm id="list-types" nameText="City" optionForChoice={cities} getData={cityFromChild} />
                            <ChoiceForm id="offer-types" nameText="District" optionForChoice={districts} getData={districtFromChild}  />
                            <ChoiceForm id="select-city" nameText="Property Type" optionForChoice={propertyTypes} getData={propertyTypeFromChild} />
                            <ChoiceForm id="select-city" nameText="Building Type" optionForChoice={buildingTypes} getData={buildingTypeFromChild} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
