import "../css/main.css";

import request from "./request";
import { createCountries } from "./updateUI";
import "./search";
import "./mode";

const api = "https://restcountries.com/v3.1/all";

request(api).then((data) => {
    createCountries(data);
});
