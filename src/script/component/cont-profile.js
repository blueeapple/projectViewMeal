class ContProfile extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        let deskrip = `"Toko makanan yang menjual berbagai jenis makanan olahan
         daging dari berbagai negara dengan aneka ragam penyajian yang memukau selera makan anda"`;
        this.innerHTML = `
           <h1 class="deskripsi mt-5 p-5 text-center">${deskrip}</h1>
        `;
    }
}

customElements.define("cont-profile", ContProfile);
