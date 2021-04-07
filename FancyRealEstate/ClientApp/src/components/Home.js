import React, { useState, useEffect } from 'react';
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel.js'
import { Search } from './Search/Search.js'
import { Sort } from './Sort/Sort'
import { Gallery } from './Gallery/Gallery.js'
import { Footer } from './Footer/Footer.js'


export const Home = () => {
    // cost displayName = Home.name;
    const [page, setPage] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [deal, setDeal] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");


    useEffect(() => {
       

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

    const parametersForRequest = {"page": page, "city": city, "district": district, "propertyType": propertyType,
                                  "priceByPrice": price, "priceByDate": date ,"deal": deal, "minPrice": minPrice, "maxPrice" : maxPrice }

    return (
        <div>
            <HeadImageCarousel />
            <Search getData={dataFromSearch} />
            <Sort getData={dataFromSort} />
            <Gallery />
            <Footer />

        </div>

    );
}
