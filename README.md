#  For each

`forEach()`ejecuta la función `callback`una vez por cada elemento presente en el array en orden ascendente. No es invocada para índices que han sido eliminados o que no han sido inicializados (Ej. sobre arrays `sparse`)

``

```
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

# Map

`map`llama a la función `callback`provista **una vez por elemento** de un array, en orden, y construye un nuevo array con los resultados. `callback`se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados oa los que no se ha asignado valor.

``

```
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```



# filter

`filter()`llama a la función `callback` sobre cada elemento del arreglo, y construye un nuevo arreglo con todos los valores para los cuales `callback`devuelve un valor verdadero. `callback`se invoca sólo para índices del array que tienen un valor asignado. No se invoca sobre índices que hayan sido borrados oa los que no se les haya asignado algún valor. Los elementos del array que no cumplen la condición `callback` simplemente los salta, y no son incluidos en el nuevo array.

``

```
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```

# Search

Cuando se desea saber en qué casos un patrón se encuentra en una cadena de texto utiliza `search()`(si sólo deseas saber si existe, utiliza el método [`test()`](del prototipo de `RegExp`); para más información (pero de ejecución más lenta) utiliza [`match()`](similar al método [`exec()`])de las expresiones regulares).

``

```
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}
```

# Iterador

En JavaScript, un **iterador** es un objeto que permite recorrer una colección y devolver un valor al terminar.

Específicamente, un iterador es un objeto que implementa el [protocolo de iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) a través del método `next()`, el cual devuelve un objeto con dos propiedades:

``

```
function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
       next: function(){
           return siguienteIndice < arreglo.length ?
               {value: arreglo[siguienteIndice++], done: false} :
               {done: true};
       }
    }
}
```

# Ciclo

inicialización - Sucede antes de la primera ejecución del bucle. Esta expresión es comúnmente utilizada para crear contadores. Las variables creadas tienen un alcance (scope) limitado al cuerpo del bucle. Una vez que el bucle ha terminado su ejecución las variables son destruidas.

``

```javascript
var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }

    resultado:
    1
    2
    3
    undefined
```