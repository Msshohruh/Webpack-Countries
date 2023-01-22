const cards = document.querySelector(".cards");

export const createCountries = (counrtries) => {
    console.log(counrtries);
    cards.innerHTML = "";
    counrtries.forEach((country) => {
        let {
            capital,
            name: { common },
            population,
            region,
            flags: { svg },
        } = country;
        // capital = capital[0] ? capital[0] : "No capital";
        let li = document.createElement("li");
        li.classList.add("cards__item");
        li.innerHTML = `
        <a href="./about.html?country=/name/${common}">
        <img
            src="${svg}"
            alt="${common}"
            width="267"
            height="160"
        />
        <div class="cards__item-inner">
            <h3 class="cards__title">${common}</h3>
            <p class="population">
                Population: <span>${population}</span>
            </p>
            <p class="region">
                Region: <span>${region}</span>
            </p>
            <p class="capital">
                Capital: <span>${capital ? capital : "No capital"}</span>
            </p>
        </div>
    </a>
        `;
        cards.appendChild(li);
    });
};

//About UI

const countryInfo = document.querySelector(".country-info");

export const createCountryInfo = (country) => {
    console.log(country);
    let {
        capital,
        name,
        name: { common },
        population,
        region,
        subregion,
        currencies,
        flags: { svg },
        tld,
        languages,
        borders,
    } = country;

    const officialName = Object.values(name.nativeName)[0].official;
    const currency = Object.values(currencies)[0].name;
    const language = Object.values(languages);

    countryInfo.innerHTML = `
    <img
    class="country-info__img"
    src="${svg}"
    alt="${common}"
    width="560"
    height="400"
/>
<div class="country-info__content">
    <h2>${common}</h2>
    <ul class="country-info__list">
        <li class="country-info__item">
            <p class="name">
                Native Name: 
                <span>${officialName}</span>
            </p>
            <p class="population">
                Population:
                <span>${population}</span>
            </p>
            <p class="region">
                Region:
                <span>${region}</span>
            </p>
            <p class="sub-region">
                Sub Region:
                <span>${subregion}</span>
            </p>
            <p class="capital">
                Capital:
                <span>${capital ? capital[0] : "No capital"}</span>
            </p>
        </li>
        <li class="country-info__item">
            <p class="name">
                Top Level Domain:
                <span>${tld}</span>
            </p>
            <p class="population">
                Currencies:
                <span>${currency}</span>
            </p>
            <p class="region">
                Languages:
                <span>${language}</span>
            </p>
        </li>
    </ul>

    <div class="country-info__borders">
        <h3>Border Countries:</h3>
        ${
            borders
                ? borders.map((border) => {
                      return `<a href="./about.html?country=/alpha/${border}">${border}</a>`;
                  })
                : "No Borders"
        }
    </div>
</div>
    `;
};
