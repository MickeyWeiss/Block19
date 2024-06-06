const freelancers = [
    {Name: "Alice", Occupation: "Writer", Price: "$30"},
    {Name: "Bob", Occupation: "Teacher", Price: "$50"},
    {Name: "Carol", Occupation: "Programmer", Price: "$70"},
    {Name: "Joe", Occupation: "Engineer", Price: "$100"},
    {Name: "Allison", Occupation: "Lawyer", Price: "$250"}
];

function createTableRow(freelancer){
    const row = document.createElement('tr')

    const name = document.createElement('td')
    name.textContent = freelancer.name
    const occupation = document.createElement('td')
    occupation.textContent = freelancer.occupation
    const price = document.createElement('td')
    price.textContent = freelancer.price

    row.append(name)
    row.append(occupation)
    row.append(price)

    return row

}

function setAveragePrice(index){
   console.log(index)

   let sum = 0
   for(let i = 0; i <= index; i++){
    sum += freelancers[i].price
   }
   console.log("Average Price: ")
   return sum / index

}

let index = 0
let internal = setInterval(() => {
    let nextRow = createTableRow(freelancers[index])
    index += 1

    if(index === freelancers.length - 1){
        clearInterval(internal)
    }

    const table = document.querySelector('table')
    table.append(nextRow)

    let avgPrice = setAveragePrice(index)
    const priceSpan = document.querySelector('#price')
    priceSpan.append('#price')
}, 1000)
