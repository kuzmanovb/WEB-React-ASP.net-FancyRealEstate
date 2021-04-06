import React  from 'react'

export const ChoiceForm = (props) => {


    const passData = (e) => {
        
        props.getData(e.target.value)
    }

    return (
        <div className="col-md-3">
            <label htmlFor={props.id}>{props.nameText}</label>
            <div className="select-wrap">
                <span className="icon icon-arrow_drop_down"></span>
                <select name={props.id} id={props.id} className="form-control d-block rounded-0" onChange={passData}>
                    <option value="">Search by {props.nameText}</option>
                    {props.optionForChoice.map((opt) =>
                        <option key={opt} value={opt}>{opt}</option>
                    )}
                </select>
            </div>
        </div>
    );
}
