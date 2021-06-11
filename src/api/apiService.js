
import axios from 'axios';

export const saveFilmes = async (data) => {
    try{
        let URL = `http://localhost:8080/filmes-cadastrar`;
        let result = await axios.post(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}
export const updateFilmes = async (data) => {
    try{
        let URL = `http://localhost:8080/filmes-editar/${data.filme_id}`;
        let result = await axios.put(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}
export const deleteFilmes = async (id) => {
    try{
        const res = await axios.delete(`http://localhost:8080/filmes-excluir/${id}`);
        return res;
    }catch(err){
        console.error(err)
    }
}

export const listarFilmes = async () => {
    try{
        let URL = `http://localhost:8080/filmes`;
        let result = await axios.get(URL);
        return result;
    }catch(err){
    }
}
export const FilmeById = async (id) => {
    try{
        let URL = `http://localhost:8080/filmes/${id}`;
        let result = await axios.get(URL);
        return result;
    }catch(err){
        console.error(err)
    }
}


export const saveCinemas = async (data) => {
    try{
        let URL = `http://localhost:8080/cinemas-cadastrar`;
        let result = await axios.post(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const cinemaById = async (id) => {
    try{
        let URL = `http://localhost:8080/cinemas/${id}`;
        let result = await axios.get(URL);
        return result;
    }catch(err){
        console.error(err)
    }
}
export const updateCinemas = async (data) => {
    try{
        let URL = `http://localhost:8080/cinemas-editar/${data.cinema_id}`;
        let result = await axios.put(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}
export const deleteCinemas = async (id) => {
    try{
        const res = await axios.delete(`http://localhost:8080/cinemas-excluir/${id}`);
        return res;
    }catch(err){
        console.error(err)
    }
}

export const listarCinemas = async () => {
    try{
        let URL = `http://localhost:8080/cinemas`;
        let result = await axios.get(URL);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const listarSessoesByCinema = async (id) => {
    try{
        let URL = `http://localhost:8080/cinema/${id}/sessoes`
        let result = await axios.get(URL);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const saveSessao = async (data) => {
    try{
        let URL = `http://localhost:8080/sessoes-cadastrar`;
        let result = await axios.post(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const sessaoById = async (id) => {
    try{
        let URL = `http://localhost:8080/sessao/${id}`;
        let result = await axios.get(URL);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const updateSessoes = async (data, id) => {
    try{
        let URL = `http://localhost:8080/sessoes-editar/${id}`;
        let result = await axios.put(URL, data);
        return result;
    }catch(err){
        console.error(err)
    }
}

export const deleteSessoes = async (id) => {
    try{
        const res = await axios.delete(`http://localhost:8080/sessoes-excluir/${id}`);
        return res;
    }catch(err){
        console.error(err)
    }
}