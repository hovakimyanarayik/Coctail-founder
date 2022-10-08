const drinkInfoComponent = {
    render(drink) {
        const ingredients = [];
        for(let i = 1; i <= 15; i++) {
            if(drink[`strIngredient${i}`]) {
              ingredients.push(`${drink[`strIngredient${i}`]}`)
            }
          }
        return `
            <div class="big-img">
                <img src="${drink.strDrinkThumb}" alt="coctail">
            </div>
            <div class="big-info">
                <p class="single-coctail-name">${drink.strDrink}</p>
                <p class="alcohol single">Category: <i>${drink.strCategory}</i></p>
                <p class="alcohol single">Glass: <i>${drink.strGlass}</i></p>
                <p class="alcohol single">Alcoholic: <i>${drink.strAlcoholic}</i> </p>
                <p class="alcohol single">Alcoholic: <i>${drink.strInstructions}</i></p>
                <p class="composition">Composition:</p>
                <p class="alcohol single ingredient"><i>${ingredients.join(', ')}</i> </p>
            </div>
        `
    }
}

export default drinkInfoComponent;