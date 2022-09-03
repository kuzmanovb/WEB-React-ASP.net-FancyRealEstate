import {url} from'./apiServer'

const cityUrl = url + "cities"

export const getAll = () =>{
    return fetch(cityUrl + `/getAll`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByCountry = (countryName) => {
    return fetch(cityUrl + `/getByCountry?countryName=${countryName}`)
        .then(res => res.json())
        .catch(error => console.log(error))
};

export const getByName = (name, countryId) =>{
    return fetch(cityUrl + `/getByName?name=${name}&countryId=${countryId}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create = (name, countryId) =>{
    return fetch(cityUrl + `/create?name=${name}&countryId=${countryId}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted = (name, countryId) =>{
    return fetch(cityUrl + `/deleted?name=${name}&countryId=${countryId}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};