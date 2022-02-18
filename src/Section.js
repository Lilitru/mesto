class Section{
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._container =  document.querySelector(containerSelector);
    }

    _clear() {
        this._container.innerHTML = '';
      }
    
    renderAll(){
        this._clear();
        this._items.forEach((item) => {
            const html = this._renderer(item);
            this._container.append(html);
        });
    }

    addItem(element){
        this._container.prepend(element);
    }
}

export default Section;