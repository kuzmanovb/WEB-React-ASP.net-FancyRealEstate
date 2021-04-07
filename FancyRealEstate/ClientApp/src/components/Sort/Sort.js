import React, { useState, useEffect } from 'react'
import './Sort.css'

export const Sort = (props) => {

    const [deal, setDeal] = useState("")
    const [sort, setSort] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {

        props.getData(deal,sort, date)

    }, [deal, sort, date])

    const getDeal = (e) => {
        setDeal(e.target.value)
    };

    const getPrice = (e) => {
        setSort(e.target.value)
    };

    
    const getDate = (e) => {
        setDate(e.target.value)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="py-3 px-3 d-md-flex align-items-center">
                    <div>
                        <button className="btn btn-outline-success px-3" value="" onClick={getDeal} >All</button>
                        <button className="btn btn-outline-success px-3" value="rent" onClick={getDeal}>Rent</button>
                        <button className="btn btn-outline-success px-3" value="sele" onClick={getDeal}>Sale</button>
                    </div>
                    <div className="select-wrap ml-3">
                        <select className="form-control-sort form-control-sort-sm d-block rounded-0" onClick={getPrice}>
                            <option value="">Sort by Price</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                    <div className="select-wrap ml-3">
                        <select className="form-control-sort form-control-sort-sm d-block rounded-0" onClick={getDate}>
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