const cardComponent = {
    render(coctail) {
        return `
            <div class="coctail-img">
                <img src="${coctail.strDrinkThumb}" alt="coctail" data-id="${coctail.idDrink}">
            </div>
            <div class="coctail-info">
                <p class="coctail-name">${coctail.strDrink ? coctail.strDrink : ''}</p>
                <p class="alcohol"><i>${coctail.strCategory ? 'Category: ' + coctail.strCategory : ''}</i></p>
                <p class="alcohol"><i>${coctail.strGlass ? 'Glass: ' + coctail.strGlass : ''}</i></p>
                <p class="alcohol"><i>${coctail.strAlcoholic ? 'Alcoholic: ' + coctail.strAlcoholic : ''}</i> </p>
            </div>
        `
    },
    createCard(coctail) {
        const drinkCard = document.createElement('div');
        drinkCard.classList.add('coctail-card');
        drinkCard.innerHTML = cardComponent.render(coctail);
        return drinkCard;
    }
}


export default cardComponent;


