import { url } from './apiServer'

const propertyUrl = url + "realEstateProperties"
const sortedPropertyUrl = url + "sortedRealEstateProperies"

export const createProperty = (value, token) => {
    return fetch(propertyUrl + "/create", {
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
    return fetch(propertyUrl + "/update", {
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
    return fetch(propertyUrl + `/softdelete?id=${id}`,{
        method: "DELETE",
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByUserId = (userId, sortByDateAscending) => {
    return fetch(sortedPropertyUrl + "/getsorted", {
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

export const getAll = (values) => {
    return fetch(sortedPropertyUrl + "/getsorted", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
};