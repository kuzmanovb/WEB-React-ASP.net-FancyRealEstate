import {url} from'./apiServer'

const buildingUrl = url + "/buildingTypes"

export const getAll= () =>{
    return fetch(buildingUrl)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByName= (name) =>{
    return fetch(buildingUrl + `/${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create= (name) =>{
    return fetch(buildingUrl + `/${name}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted= (name) =>{
    return fetch(buildingUrl + `/${name}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};