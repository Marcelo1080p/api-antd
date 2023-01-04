import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
})

const personagem = () => {
  return api.get("/character").then((res) => res.data.results);
};



export default { personagem };
