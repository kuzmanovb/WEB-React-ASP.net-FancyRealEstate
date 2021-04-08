import React, { useState, useEffect } from 'react'
import './Pagination.css'

export const Pagination = (props) => {

    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {

        setPages(Math.ceil(props.data.length / 9))

    }, [props])

    const handleStateValue = (e) => {

        props.getNumber(e.target.value)
        setCurrentPage(e.target.value)
    };

    const numberPages = () => {

        let numbers = [];

        for (let i = 1; i <= pages; i++) {

            numbers.push(

                <button type="button" className={currentPage == i ? "active" : ""} key={i} value={i} onClick={handleStateValue}>
                    {i}
                </button>
            )
        }

        return numbers
    }


    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="site-pagination">
                    {numberPages().map((i) => (
                        i
                    ))}
                </div>
            </div>
        </div>);

}