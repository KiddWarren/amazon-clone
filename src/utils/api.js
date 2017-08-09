import axios from 'axios'

const pokeURL = `http://pokeapi.co/api/v2/`

//search function
export function search(type, text){
    switch (type){
        case 'name':
            return axios.get(`${pokeURL}pokemon/${text}`).then(response=>response.data)
            //returns object
        
        case 'class':
            return axios.get(`${pokeURL}type/${text}`).then(response=>response.data.pokemon)
            //returns array

        case 'ability':
            return axios.get(`${pokeURL}ability/${text}`).then(response=>response.data.pokemon)
            //returns array

        default:
            return 404
    }
}
//get all pokemon
export function getByType(type){
    //type will have to be a number. 
    return axios.get(`${pokeURL}type/${type}`).then(response=>response.data.pokemon)
    //returns array
}
