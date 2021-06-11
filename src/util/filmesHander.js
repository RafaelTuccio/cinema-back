import { saveFilmes } from '../api/apiService';

export const filmesSubmitHandler = (data) => {
   
        let { filme } = data;
        //console.log("handler", data)
        let result = saveFilmes(data)
   
}