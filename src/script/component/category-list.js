import './category-item.js';

class CategoryList extends HTMLElement {
    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {

        this.innerHTML = ``;
        this._categories.forEach(category => {
            const cate = document.createElement("category-item");
            cate.category = category;
            this.appendChild(cate);
        });

    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 h2 class="placeholder" > ${message}</h2 > `;
    }
}

customElements.define("category-list", CategoryList);