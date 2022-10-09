# Scope

Es una función que sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que (por ejemplo) no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones

``

```
function exampleFunction() {
    var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
    console.log("funcion interna");
    console.log(x);
}

console.log(x);
```