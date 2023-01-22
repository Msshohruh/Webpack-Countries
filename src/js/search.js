import request from "./request";
import { createCountries } from "./updateUI";

const searchForm = document.querySelector(".search");

searchForm.search.addEventListener("input", () => {
    let inputValue = searchForm.search.value.toLowerCase().trim();
    const cardsItems = document.querySelectorAll(".cards__item");
    const cardsTitle = document.querySelectorAll(".cards__title");
    cardsTitle.forEach((title, i) => {
        if (title.textContent.toLowerCase().includes(inputValue)) {
            cardsItems[i].style.display = "block";
        } else {
            cardsItems[i].style.display = "none";
        }
    });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
    li.addEventListener("click", () => {
        searchSelectSpan.textContent = li.textContent;
        let filterApi;
        if (li.textContent === "All") {
            filterApi = "https://restcountries.com/v3.1/all";
        } else {
            filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`;
        }

        request(filterApi).then((data) => {
            createCountries(data);
        });
    });
});
