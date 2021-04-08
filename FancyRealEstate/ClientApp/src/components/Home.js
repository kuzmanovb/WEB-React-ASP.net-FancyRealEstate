/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel.js'
import { Search } from './Search/Search.js'
import { Sort } from './Sort/Sort'
import { Gallery } from './Gallery/Gallery.js'
import { Footer } from './Footer/Footer.js'
import * as propertyService from '../services/propertyService'


export const Home = () => {
    // cost displayName = Home.name;
    const [properties, setProperties] = useState([])
    const [page, setPage] = useState("0")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [deal, setDeal] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("0");


    useEffect(() => {

        propertyService.getAll(parametersForRequest).then(res => setProperties(res))

    }, [city, district, propertyType, deal, date, price, minPrice, maxPrice])

    const dataFromSearch = (sityName, districtName, type) => {
        setCity(sityName)
        setDistrict(districtName)
        setPropertyType(type)
    }

    const dataFromSort = (dealType, pricePrice, dateSort, minPriceValue, maxPriceValue) => {
        setDeal(dealType)
        setPrice(pricePrice)
        setDate(dateSort)
        setMinPrice(minPriceValue)
        setMaxPrice(maxPriceValue)
    }

    const parametersForRequest = {
        "page": page, "city": city, "district": district, "propertyType": propertyType,
        "sortByPrice": price, "sortByDate": date, "deal": deal, "minPrice": minPrice, "maxPrice": maxPrice,
    }

    return (
        <div>
            <HeadImageCarousel data={properties}/>
            <Search getData={dataFromSearch} />
            <Sort getData={dataFromSort} />
            <Gallery allProperties={properties}/>
            <Footer />

        </div>

    );
}
