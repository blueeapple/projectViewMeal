class FigureImg extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<img src="https://www.themealdb.com/images/ingredients/Lime.png"> `;
    }
}

customElements.define("figure-img", FigureImg);