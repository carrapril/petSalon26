let salon={
    name:"The Fashionable Pet",
    address:{
        street:"123 Ave.",
        ZIPcode:"12345",
        number:"555-555-5555"
    },
    hours:{
        open:"9:00AM",
        close:"5:00PM"
    },

    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Great Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Jake",
            age:2,
            gender:"Male",
            breed:"Yorkie",
            service:"Grooming",
            owner:"Johnny",
            phone:"555-123-5555"

        },
        {
            name:"Isa",
            age:7,
            gender:"Female",
            breed:"Maltese",
            service:"Grooming",
            owner:"Lisa",
            phone:"555-456-5555"
        },
        {
            name:"Lilly",
            age:10,
            gender:"Female",
            breed:"Shi Tzu",
            service:"Grooming",
            owner:"Miller",
            phone:"555-789-5555"
        }
    ]

}   
console.log(salon.pets);

function displayPetNames(){
    alert(`You have: $`)
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pet[i].age)
    }
}
    //travel the array
    //display in the console the names
  

alert('You have: 4 Pets Registered')
console.log(salon.pets.name);


//add a alert function displaying how many pets you have 
//list the names of the pets only in the console







