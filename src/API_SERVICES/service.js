import axios from "axios";
const APIURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPart"
const services = {
  get: async (params) => {
    console.log("Value of params comming is", params);
    try {
      const response = await axios({
        method: "GET",
        url: APIURL + "/" + params,
        headers: { 'X-RapidAPI-Key': '4957858b37mshff60c69817e9ebep181b9bjsn3a0ce2fe64b1','X-RapidAPI-Host':'exercisedb.p.rapidapi.com' },
      });
      const json = await response;
      return json;
    } catch (err) {
      throw err;
    }
  },
};
export default services;
