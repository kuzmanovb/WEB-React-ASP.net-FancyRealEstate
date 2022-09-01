import {url} from'./apiServer'

const countriesUrl = url + "countries"

export const getAll= () =>{
    return fetch(countriesUrl + "/getall")
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByName= (name) =>{
    return fetch(countriesUrl + `/getbyname?name=${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create= (name) =>{
    return fetch(countriesUrl + `/create?name=${name}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted= (name) =>{
    return fetch(countriesUrl + `/deleted?name=${name}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};