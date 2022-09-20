
class CalcularCadena{

    calcularCadena(cadena){
       
        if(cadena.trim() == "")
        {
            return 0;
        }
        let suma=0;
        let numeros =cadena.split(/,|-/);// , or -
        for(let i=0;i<numeros.length;i++){
            if (!isNaN(numeros[i])) {
                if (numeros[i] < 1000) {
                    suma += parseInt(numeros[i]);

                }
            }
        }
        return suma;
    }

}



export default CalcularCadena;