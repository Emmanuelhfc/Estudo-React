

var a = 10

if (true) {
    var a = 5
    console.log(a)
}

console.log(a)

let x = 10
const b = 7

if (true) {
    let x = 5
    const b = 10
    console.log(`x=${x}`)
    console.log(`b=${b}`)
}

console.log(`b=${b}`)
console.log(`x=${x}`)

// Arrow functions

const printFunc = function sum(a, b){
    return a + b
}

const arrowFunction = (a, b) => a + b
// const arrowFunction = (a, b) => {
//     return a + b
// }

console.log(`Function ${printFunc(10, 20)}`)
console.log(`Arrow Function ${arrowFunction(10, 20)}`)


const objeto = {
    name: "Emmanuel",
    metodo(){
        const returnName = function(){
            console.log(this) // Nesse caso o this se refere a window
            return this.name
        }
        return returnName()
    },
    metodoArrow(){
        const returnName = () => {
            console.log(this) // Nesse caso o this é o objeto
            return this.name
        }
        return returnName()
    }
}

console.log(`Objeto name por function = ${objeto.metodo()}`)
console.log(`Objeto name por arrowFunction = ${objeto.metodoArrow()}`)

// Método Filter

const lista = [1, 2, 3, 4, 5]

const high = lista.filter((n) => {
    if (n >= 3){
        return true
    }
})

console.log(`Lista só com os maiores ${high}`)

const objetos = [
    {name:'Joao', availible:true},
    {name:'Cesar', availible:false},
    {name:'Zeca', availible:false},
    {name:'Mateus', availible:true}
]

const availibleUsers = objetos.filter((user) => user.availible)
console.log(`Lista usuários disponíveis ${availibleUsers}`)
console.log(availibleUsers)

// método Map

const listaProdutos = [
    {name: "calça", price: 20.99, category: "Roupas"},
    {name: "fogao", price: 20.99, category: "Eletro"},
    {name: "geladeira", price: 20.99, category: "Eletro"},
    {name: "meia", price: 20.99, category: "Roupas"},
    {name: "camiseta", price: 20.99, category: "Roupas"},
    {name: "sapato", price: 20.99, category: "Roupas"},
]


listaProdutos.map((product) =>{
    if (product.category === "Roupas"){
        product.onSale = true

    }
})

console.log(listaProdutos)

// Template Literals

const username = 'Emmanuel'
const age = 24

console.log(`${username} tem ${age} anos de idade`)

// Destructing 

const array = ["a", "b", "c"]
const [f1, f2, f3] = array

console.log(`f1=${f1}, f3=${f3}`)


const newObject = {
    algo: "Emmanuel",
    outro: "23"
}

const {
    algo:name1,
    outro
} = newObject


console.log(`name=${outro}`)

// Spread operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
const a4 = [0, ...a1, 4]

console.log(a3)
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}

const car = {...carName, ...carBrand, ...a1}

console.log(car)

// Classes 

class Product {
    constructor (name, price){
        this.name = name
        this.price = price
    }
    priceWithDiscount(discount){
        return this.price * (100 - discount)/100
    }

}

const shirt = new Product('shirt', 90)
const shoes = new Product('shoes', 80)

console.log(`Product=${shirt.name}. Price=${shirt.priceWithDiscount(90)}`)
console.log(`Product=${shoes.name}. Price=${shoes.priceWithDiscount(35)}`)

// Herança

class ProductWithAttributes extends Product{
    constructor (name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log('Essas são as cores')
        this.colors.forEach(color => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes('hat', 90, ['blue', 'green', 'yellow'])

console.log(`Product=${hat.name}. Price=${hat.priceWithDiscount(35)}`)
hat.showColors()
