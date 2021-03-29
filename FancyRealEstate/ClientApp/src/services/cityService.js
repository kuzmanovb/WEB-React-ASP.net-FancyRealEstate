import {url} from'./apiServer'

const cityUrl = url + "/city"

export const getAll= () =>{
    return fetch(cityUrl)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByName= (name) =>{
    return fetch(cityUrl + `/${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create= (name) =>{
    return fetch(cityUrl + `/${name}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted= (name) =>{
    return fetch(cityUrl + `/${name}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};