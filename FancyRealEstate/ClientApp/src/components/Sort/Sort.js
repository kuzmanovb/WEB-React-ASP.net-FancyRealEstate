import React, { useState, useEffect } from 'react'
import './Sort.css'

export const Sort = (props) => {

    const [deal, setDeal] = useState("")
    const [sortPrice, setSortPrice] = useState("")
    const [date, setDate] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    useEffect(() => {

        passData();

    }, [deal, sortPrice, date, minPrice, maxPrice])

    const getDeal = (e) => {
        setDeal(e.target.value)
    };

    const getPrice = (e) => {
        setSortPrice(e.target.value)
    };

    const getDate = (e) => {
        setDate(e.target.value)
    };

    const getMinPrice = (e) => {
        setMinPrice(e.target.value)
    };

    const getMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    };

    const passData = () => {
        props.getData(deal, sortPrice, date, minPrice, maxPrice)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="py-3 px-3 d-md-flex align-items-center">
                    <div>
                        <button className="btn btn-outline-success px-3" name="deal" value="" onClick={getDeal} >All</button>
                        <button className="btn btn-outline-success px-3" name="deal" value="rent" onClick={getDeal}>Rent</button>
                        <button className="btn btn-outline-success px-3" name="deal" value="sele" onClick={getDeal}>Sale</button>
                    </div>
                    <div className="select-wrap col-2">
                        <input type="number" className="form-control" name="minPrice" placeholder="Min Price" onClick={getMinPrice} onBlur={getMinPrice} />
                    </div>
                    <div className="select-wrap col-2">
                        <input type="number" className="form-control" name="maxPrice" placeholder="Max Price" onClick={getMaxPrice} onBlur={getMaxPrice} />
                    </div>
                    <div className="select-wrap ml-3">
                        <select className="form-control-sort form-control-sort-sm d-block rounded-0" name="price" onClick={getPrice}>
                            <option value="">Sort by Price</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                    <div className="select-wrap ml-3">
                        <select className="form-control-sort form-control-sort-sm d-block rounded-0" name="date" onClick={getDate}>
                            <option value="">Sort by Date</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>


    );
}