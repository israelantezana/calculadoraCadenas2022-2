import calcularCadena from "./CalculadorCadena";

const cD = new calcularCadena();
describe("Calculadora de cadenas", () => {
    it("Toma en cuenta una cadena vacia", () => {
      expect(cD.calcularCadena("")).toEqual(0);
    });
    it("Toma en cuenta una cadena con un numero", () => {
        expect(cD.calcularCadena("2")).toEqual(2);
    });
    it("Toma en cuenta cadena con dos números", () => {
        expect(cD.calcularCadena("1,2")).toEqual(3);
      });
    it("Toma en cuenta como 0 a un string con solo espacios", () => {
        expect(cD.calcularCadena("          ")).toEqual(0);
      });
    it("Se toma en cuenta delimitadores de ',' y '-'", () => {
    expect(cD.calcularCadena("10-20,5")).toEqual(35);
    });
    it("no toma en cuenta delimitadores no existentes", () => {
        expect(cD.calcularCadena("10#20,5")).toEqual(5);
        });

        it("no toma en cuenta numeros mayores a 1000", () => {
            expect(cD.calcularCadena("10582,20,5")).toEqual(25);
            });

   
  });
  