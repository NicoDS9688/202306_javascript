function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])
console.log(pizza2);

pizza3 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "cheddar"], ["huevo duro", "jamón"]);
console.log(pizza3);

pizza4 = pizzaOven("estilo napolitana" , "tradicional" , ["mozzarella"], ["calabresa"]);
console.log(pizza4);