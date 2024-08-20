const names = ['Alice', 'Bob', 'Carol', 'Joe', 'Allison']
const occupations = ['Writer', 'Teacher', 'Programmer', 'Engineer', 'Lawyer']
const prices = ['$30', '$50', '$70', '$100', '$250']

const freelancers = [
    {name: "Alice", occupation: "Writer", price: "$30"},
    {name: "Bob", occupation: "Teacher", price: "$50"},
    {name: "Carol", occupation: "Programmer", price: "$70"},
    {name: "Joe", occupation: "Engineer", price: "$100"},
    {name: "Allison", occupation: "Lawyer", price: "$250"}
];

function renderFreelancers() {
    const container = document.querySelector("#freelancers");
    freelancers.forEach((freelancer) => {
        container.innerHTML += `<div> Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: ${freelancer.price}`
    })
}
renderFreelancers()

function averagePrice() {
    const totalPrice = freelancers.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    const avgPrice = totalPrice/freelancers.length;
    document.querySelector('#avgPrice').textContent = `Average Freelancer Price: $${avgPrice}`

}
averagePrice()

function randomFreelancer () {
    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = [Math.floor(Math.random() * prices.length)]
    return {name, occupation, price}
}

//Tried a couple of different ways to render with setInterval but it continues generating in an endless loop for both. 

// let genFreelancer = 0;
// setInterval(() => {
//     if(genFreelancer < freelancers.length) {
//         const newFreelancer = freelancers[genFreelancer]
//         genFreelancer++
//         freelancers.push(newFreelancer)
//         renderFreelancers()
//     }
// }, 3000)


// setInterval(() => {
//     freelancers.push(randomFreelancer())
//     renderFreelancers()
// }, 3000)