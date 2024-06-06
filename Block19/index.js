const freelancers = [
    {Name: "Alice", Occupation: "Writer", Price: "$30"},
    {Name: "Bob", Occupation: "Teacher", Price: "$50"},
    {Name: "Carol", Occupation: "Programmer", Price: "$70"},
    {Name: "Joe", Occupation: "Engineer", Price: "$100"},
    {Name: "Allison", Occupation: "Lawyer", Price: "$250"}
]
let ul = document.createElement("ul");
for (let i = 0; i <= freelancers.length; i++){
    let li = document.createElement("li");
    li.textContent = freelancers[i];
    ul.appendChild(li);
}
document.getElementById("list").appendChild(ul);
console.log(ul)

setTimeout(() => {
    ul.appendChild
}, 1000);