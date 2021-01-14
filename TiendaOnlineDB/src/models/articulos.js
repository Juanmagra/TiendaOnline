class Articulo {
    constructor(nombre, descripcion, foto, categoria, precio, stock, meGusta, rebajado, retirado, id =0 ){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.meGusta = meGusta;
        this.rebajado = rebajado;
        this.retirado = retirado;
    }
    toDto(){
        return{
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            foto : this.foto,
            categoria: this.categoria,
            precio : this.precio,
            meGusta : this.meGusta,
            rebajado : this.rebajado


        }
    }
}