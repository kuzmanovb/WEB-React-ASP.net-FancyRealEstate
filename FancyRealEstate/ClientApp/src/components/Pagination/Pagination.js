import React from 'react'
import {Link} from 'react-router-dom'
import './Pagination.css'

export const Pagination = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="site-pagination">
                    <Link to="#" className="active">1</Link>
                    <Link to="#">2</Link>
                    <Link to="#">3</Link>
                    <Link to="#">4</Link>
                    <Link to="#">5</Link>
                    <span>...</span>
                    <Link to="#">10</Link>
                </div>
            </div>
        </div>);

}