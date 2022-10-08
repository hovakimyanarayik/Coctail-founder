import categoriesComponent from "./components/categorieComponent.js";
import cardComponent from "./components/cardComponent.js";
import drinkInfoComponent from "./components/drinkInfoComponent.js";
import {scrollToTop, scrollToElement, unknownSearch} from "./utilits.js";


const categoriesList = document.getElementById('categories-list'),
    form = document.getElementById('form'),
    search = document.getElementById('search'),
    cardsConteinHeader = document.getElementById('coctails-section-header'),
    cardsContain = document.getElementById('cards-container'),
    coctailInfo = document.getElementById('single-coctail'),
    logo = document.getElementById('logo')




// Fetch and add categories to nav list
async function searchAndAddCategories() {
    const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const categories = await categoriesResponse.json()
    categoriesList.innerHTML = categoriesComponent.render(categories.drinks)
}



// Fetch 3 random drink and recomendate it
async function searchAndAddTreeRecomendations() {
    cardsContain.innerHTML = '';
    coctailInfo.innerHTML = '';
    cardsConteinHeader.innerText = 'Todays offer'
    for (let i = 1; i <= 3; i++) {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const drink = await response.json();
        const drinkCard = cardComponent.createCard(drink.drinks[0]);
        cardsContain.appendChild(drinkCard);
        
    }
}

logo.addEventListener('click', searchAndAddTreeRecomendations)


// search drinks by categorie
async function searchAndAddByCategorie(categorie) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`);
    const data = await response.json();
    cardsConteinHeader.innerText = `Search results by Category: "${categorie}"`
    cardsContain.innerHTML = '';
    setTimeout(() => {
        coctailInfo.innerHTML = '';
    }, 100)
    data.drinks.forEach((el) => {
        const drinkCard = cardComponent.createCard(el);
        cardsContain.appendChild(drinkCard);
    })
    scrollToTop()
}

// listener to search by categorie
categoriesList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        const searchCategorie = e.target.innerText;
        searchAndAddByCategorie(searchCategorie);
    }
})


// search by drink Name
async function searchAndAddByName(name){
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    if(data.drinks) {
        cardsContain.innerHTML = '';
        setTimeout(() => {
            coctailInfo.innerHTML = '';
        }, 100)
        cardsConteinHeader.innerText = `Search results for: "${name}"`
        data.drinks.forEach((el) => {
            const drinkCard = cardComponent.createCard(el);
            cardsContain.appendChild(drinkCard);
        })
        scrollToTop();
    } else {
        unknownSearch(search);
    }
}


// submit event on form to search by name
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(search.value.trim() !== '') {
        searchAndAddByName(search.value);
        search.value = '';
    } else {
        unknownSearch(search)
    }
})



// search and render drink by ID
async function searchAndShowById(id) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    coctailInfo.innerHTML = drinkInfoComponent.render(data.drinks[0])
    scrollToElement(coctailInfo)
    
}

// listnerer to detect an ID
cardsContain.addEventListener('click', (e) => {
    if(e.target.dataset.id) {
        searchAndShowById(e.target.dataset.id)
    }
})




document.addEventListener('DOMContentLoaded', () => {
    searchAndAddCategories();
    searchAndAddTreeRecomendations()
})