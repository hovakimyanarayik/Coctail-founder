const categoriesComponent = {
    render(categories) {
        return categories.reduce((acc, curr) => {
            if(curr.strCategory !== 'Other/Unknown') {
                return acc += `<li>${curr.strCategory}</li>`
            } else {
                return acc
            }
        }, '')
    }
}

export default categoriesComponent;