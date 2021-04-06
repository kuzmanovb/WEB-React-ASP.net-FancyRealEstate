import { url } from './apiServer'

const propertyUrl = url + "realEstateProperties"
const sortedPropertyUrl = url + "sortedRealEstateProperies"

export const createProperty = (value, token) => {
    return fetch(propertyUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(value)
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
};

export const updateProperty = (value, token) => {
    return fetch(propertyUrl, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(value)
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
};

export const deletedProperty= (id, token) =>{
    return fetch(propertyUrl + `/${id}`,{
        method: "DELETE",
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByUserId = (userId, sortByDateAscending) => {
    return fetch(sortedPropertyUrl, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userId, sortByDateAscending)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
};