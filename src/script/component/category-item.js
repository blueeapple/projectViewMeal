class CategoryItem extends HTMLElement {
    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.innerHTML = `
                <tbody id="listmeals">
                <tr> 
                        <td>${this._category.idCategory}</td>  
                        <td>${this._category.strCategory}</td>  
                        <td><img src="${this._category.strCategoryThumb}"></td> 
                        <td>${this._category.strCategoryDescription}</td>  
                </tr>
                </tbody>
        `;
    }

}

customElements.define("category-item", CategoryItem);