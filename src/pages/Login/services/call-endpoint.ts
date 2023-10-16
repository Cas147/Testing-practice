import axios from "axios";

export const callEndpoint = async(): Promise<any> => {
  return axios
    .post("https://rickandmortyapi.com/api/character/2")
    .then((response) => response.data);
};
