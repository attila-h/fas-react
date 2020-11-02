import axios from "axios";

export default function flightFetch(url, callback, errorPopup) {
  const token = window.localStorage.getItem("fas-token");
  const config = token ? {  headers: {
    'Authorization': `Bearer ${token}` 
  }} : {}
  axios
    .get(url, config)
    .then((response) => {
      let data = response.data;
      if (response.data.status === "error")
        errorPopup(response.data.errorMessage);
      callback(data);
    })
    .catch((err) => errorPopup(err.message));
}
