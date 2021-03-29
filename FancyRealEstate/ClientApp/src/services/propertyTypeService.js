import {url} from'./apiServer'

const propertyTypeUrl = url + "/propertyTypes"

export const getAll= () =>{
    return fetch(propertyTypeUrl)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByName= (name) =>{
    return fetch(propertyTypeUrl + `/${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create= (name) =>{
    return fetch(propertyTypeUrl + `/${name}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted= (name) =>{
    return fetch(propertyTypeUrl + `/${name}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};