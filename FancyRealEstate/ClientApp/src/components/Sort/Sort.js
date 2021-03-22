import React from 'react'
import './Sort.css'

export const Sort = (props) => {
    return (
        <div className="container">
            <div className="row">
                    <div className="py-3 px-3 d-md-flex align-items-center">
                            <div>
                            <a href="#" className="btn btn-outline-success px-3">All</a>
                            <a href="#" className="btn btn-outline-success px-3">Rent</a>
                            <a href="#" className="btn btn-outline-success px-3">Sale</a>
                            </div>
                        <div className="select-wrap ml-3">
                                <select className="form-control-sort form-control-sort-sm d-block rounded-0">
                                    <option value="">Sort by</option>
                                    <option value="">Price Ascending</option>
                                    <option value="">Price Descending</option>
                                </select>
                            </div>
                    </div>
                </div>
            </div>


    );
}