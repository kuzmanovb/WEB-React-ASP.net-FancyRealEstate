import React from 'react'
import { ChoiceForm } from './ChoiceForm/ChoiceForm.js'

import './Search.css'

export const Search = (props) => {
    return (
        <div className="site-section site-section-sm pb-0">
            <div className="container">
                <div className="row">
                    <form className="form-search col-md-12">
                        <div className="row  align-items-end">
                            <ChoiceForm id="list-types" nameText="Listing Types" optionForChoice={['Condo', 'Commercial Building', 'Land Property']}/>
                            <ChoiceForm id="offer-types" nameText="Offer Type" optionForChoice={['For Sale', 'For Rent']}/>
                            <ChoiceForm id="select-city" nameText="Select City" optionForChoice={['New York', 'Brooklyn', 'London', 'Japan', 'Philippines']}/>
                            <div className="col-md-3">
                                <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
