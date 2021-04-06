import React, { useState, useEffect } from 'react';
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel.js'
import { Search } from './Search/Search.js'
import { Sort } from './Sort/Sort'
import { Gallery } from './Gallery/Gallery.js'
import { Footer } from './Footer/Footer.js'


export const Home = () => {
    // cost displayName = Home.name;
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [propertyType, setPropertyType] = useState("")

    useEffect(() => {
        console.log(city)
        console.log(district)
        console.log(propertyType)

    }, [city, district, propertyType])

    const dataFromSearch = (sityName, districtName, type) => {
        setCity(sityName)
        setDistrict(districtName)
        setPropertyType(type)
    }

    return (
        <div>
            <HeadImageCarousel />
            <Search getData={dataFromSearch} />
            <Sort />
            <Gallery />
            <Footer />

        </div>

    );
}
