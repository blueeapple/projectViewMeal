import './category-item.js';

class CategoryList extends HTMLElement {
    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-kategori">
            <div class="row mt-2">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr class="text-center">
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Gambar</th>
                            <th>Deskripsi</th>
                        </tr>
                    </thead>
                    
                    
                    </table>
                    </div>
                </div>`;
        this._categories.forEach(category => {
            const cate = document.createElement("category-item");
            cate.category = category;
            this.appendChild(cate);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("category-list", CategoryList);