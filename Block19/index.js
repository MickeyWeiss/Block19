console.log('Hello')

const names = ['Alice', 'Bob', 'Carol', 'Joe', 'Allison']
const occupations = ['Writer', 'Teacher', 'Programmer', 'Engineer', 'Lawyer']

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
    const totalPrice = freelancers.reduce((accumulator, currentValue) => accumulator + (currentValue.price), 0);
    const avgPrice = totalPrice/freelancers.length;
    document.querySelector('#avgPrice').textContent = `Average Freelancer Price: $${avgPrice}`

}
averagePrice()

function randomFreelancer () {
    const random = freelancers[Math.floor(Math.random() * freelancers.length)]

    return {random}
}

// setInterval(() => {
//     freelancers.push(randomFreelancer())
//     renderFreelancers()
// }, 1000)