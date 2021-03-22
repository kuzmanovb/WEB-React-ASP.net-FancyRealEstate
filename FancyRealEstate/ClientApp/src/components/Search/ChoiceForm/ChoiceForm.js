import React from 'react'

export const ChoiceForm = (props) => {

    let options = props.optionForChoice.map((opt) => {
        return (
            <option key={opt} value={opt}>{opt}</option>
        );
    })

    return (
        <div className="col-md-3">
            <label for={props.id}>{props.nameText}</label>
            <div className="select-wrap">
                <span className="icon icon-arrow_drop_down"></span>
                <select name={props.id} id={props.id} className="form-control d-block rounded-0">
                    {options}
                </select>
            </div>
        </div>
    );
}
