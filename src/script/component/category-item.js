class CategoryItem extends HTMLElement {
    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.innerHTML = `      
                        <td>${this._category.idCategory}</td>  
                        <td>${this._category.strCategory}</td>  
                        <td><img src="${this._category.strCategoryThumb}"></td> 
                        <td>${this._category.strCategoryDescription}</td>  
        `;
    }

}

customElements.define("category-item", CategoryItem);