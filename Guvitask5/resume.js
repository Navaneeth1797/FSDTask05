//create your own resume data in json format



let myresume = `{
  

  "Name" : "Navaneeth Krishnan R",

  "Contact" : {
    
    "email" : "rnk1797@gmail.com",
    "phone" : "8976809172713",
    "address": "1stStreet ,annanagar , 4thavenue"   
},

  "About me":
  {
    "I would like to make best use of my acquired skills with an opportunity to improve on the same."
},

  "Education":
  {
  [
      "degree": "Bachelor of Commerce",
      "school": "University of madras",
      "graduation_year": 2017
  ]
},
  

  "Experience":
  {
  [
      "position": "Airport opertions and customer service",
      "company": "Interglobe aviation private limited",
      "start_date": "Jun 2019",
      "end_date": "Oct201",

      "responsibilities":
      [
        "Ensured the security of passengers and cargo by following the established security protocol",
        "Handled customer inquires and complaints , increasing customer satisfaction rating" 
      ]
    },
    
  "Skills":
  {
  [
   
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS"
  ]
},
  
"Languages":
{
  [   
    "english",
    "tamil",
    "malayalam'
  ]
}

}`

let newresume = JSON.parse(myresume);
console.log(newresume);
