//const h1 = document.createElement('h1');
//h1.textContent = 'Freelancer Forum';
//document.querySelector('header').appendChild(h1);


const freelancer = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
  
];

const names = ['Tim', 'Jimmy', 'Grace', 'James', 'Robert', 'Kate', 'Jake']

const occupations = ['Engineer', 'Astronaut', 'Doctor', 'Politician', 'Athlete', 'Artist', 'Journalist']

const startingPrices = [100, 130, 145, 160, 175, 200, 210];


const maxfreelancer = 10;

function render() {
  const freelancers = document.querySelector("#freelancers");
    console.log(freelancers)
  const freelancerElements = freelancer.map((person) => {
    const element = document.createElement("li");
    element.innerText = "Name: " + "  " + person.name +  ",   " + "Occupation: " + person.occupation +  ",   " + " Starting Prices: " + person.price;

    return element;
  });
  const initialValue = 0;

  const sum = freelancer.reduce((acc, freelancer) =>{

    return acc += freelancer.price;
    

  }, initialValue)


  console.log(sum);
  const average = sum/freelancer.length

  const average_div = document.querySelector("#average");

  average_div.innerText = average;
  freelancers.replaceChildren(...freelancerElements);
}

function addFreelancer(){
    const freelancer_object = {name: names[(Math.floor(Math.random() * names.length))], occupation: occupations[(Math.floor(Math.random() * occupations.length))], 
        price: startingPrices[(Math.floor(Math.random() * startingPrices.length))] };
    freelancer.push(freelancer_object)

}

const interval = setInterval(()=>{
    addFreelancer()
    render()
    if (freelancer.length >= maxfreelancer){

        clearInterval(interval);
    }
}, 3000)


render();
