class MiComponenteAgustin extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = '<p> Tiburón <p>';
    }

}
customElements.define("mi-componente-agustin", MiComponenteAgustin);