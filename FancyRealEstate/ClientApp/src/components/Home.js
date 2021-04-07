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
    const [deal, setDeal] = useState("")
    const [sort, setSort] = useState("")

    useEffect(() => {
        console.log(city)
        console.log(district)
        console.log(propertyType)
        console.log(deal)
        console.log(sort)

    }, [city, district, propertyType,deal, sort ])

    const dataFromSearch = (sityName, districtName, type) => {
        setCity(sityName)
        setDistrict(districtName)
        setPropertyType(type)
    }

    const dataFromSort = (dealType, sortType) => {
        setDeal(dealType)
        setSort(sortType)
    }

    return (
        <div>
            <HeadImageCarousel />
            <Search getData={dataFromSearch} />
            <Sort  getData={dataFromSort}/>
            <Gallery />
            <Footer />

        </div>

    );
}
