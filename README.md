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