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

export const getByName = (name) =>{
    return fetch(cityUrl + `/getByName?name=${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create = (name, countryName) =>{
    return fetch(cityUrl + `/create?name=${name}&countryName=${countryName}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted = (name, countryName) =>{
    return fetch(cityUrl + `/deleted?name=${name}&countryName=${countryName}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};