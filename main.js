let producto1 = parseInt (prompt ("Ingrese el valor del primer producto seleccionado"));
let producto2 = parseInt (prompt ("Ingrese el valor del segundo producto seleccionado"));
let tipoFactura = prompt ("Ingrese si desea tipo de factura A o B").toUpperCase();
let facturaElegida = tipoFactura;

const sumaProductos = producto1 + producto2
const productoIva = sumaProductos * 0.21

const precioFinal = (sumaProductos, tipoFactura) => {
    switch (tipoFactura) {
        case "A":
            return sumaProductos + productoIva;
        case "B":
            return sumaProductos;
        default:
            return "Tipo de factura no válida";
    }
}

let resultado = precioFinal (sumaProductos, tipoFactura);
alert (`Su total es de ${resultado}`)