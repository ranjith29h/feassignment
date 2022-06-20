const data = [
  {
    id: 1,
    firstName: "Flossy",
    lastName: "Hastler",
    company: "Skajo",
    jobTitle: "Professor",
    state: "Michigan",
    isSiteAdmin: false,
    dateJoined: "8/16/2021"
  },
  {
    id: 2,
    firstName: "Umberto",
    lastName: "Igglesden",
    company: "Eare",
    jobTitle: "Engineer III",
    state: "California",
    isSiteAdmin: false,
    dateJoined: "5/26/2022"
  },
  {
    id: 3,
    firstName: "Florry",
    lastName: "Leupold",
    company: "Yoveo",
    jobTitle: "Web Designer I",
    state: "Louisiana",
    isSiteAdmin: true,
    dateJoined: "3/15/2022"
  },
  {
    id: 4,
    firstName: "Jae",
    lastName: "Burfoot",
    company: "Skinix",
    jobTitle: "Business Systems Development Analyst",
    state: "New York",
    isSiteAdmin: false,
    dateJoined: "2/15/2022"
  },
  {
    id: 5,
    firstName: "Lynnette",
    lastName: "Itscowics",
    company: "Eimbee",
    jobTitle: "Budget/Accounting Analyst II",
    state: "Georgia",
    isSiteAdmin: true,
    dateJoined: "8/17/2021"
  },
  {
    id: 6,
    firstName: "Euell",
    lastName: "Sottell",
    company: "Photolist",
    jobTitle: "Research Assistant IV",
    state: "Kansas",
    isSiteAdmin: false,
    dateJoined: "3/8/2022"
  },
  {
    id: 7,
    firstName: "Charis",
    lastName: "Monks",
    company: "Talane",
    jobTitle: "Research Nurse",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "5/12/2022"
  },
  {
    id: 8,
    firstName: "Leroy",
    lastName: "Fernyhough",
    company: "Chatterbridge",
    jobTitle: "Editor",
    state: "Connecticut",
    isSiteAdmin: false,
    dateJoined: "6/28/2021"
  },
  {
    id: 9,
    firstName: "Marthena",
    lastName: "Iannuzzelli",
    company: "Buzzshare",
    jobTitle: "Human Resources Manager",
    state: "New Mexico",
    isSiteAdmin: false,
    dateJoined: "6/30/2021"
  },
  {
    id: 10,
    firstName: "Annmarie",
    lastName: "Paulin",
    company: "Jaxworks",
    jobTitle: "Web Developer IV",
    state: "West Virginia",
    isSiteAdmin: false,
    dateJoined: "10/11/2021"
  },
  {
    id: 11,
    firstName: "Fannie",
    lastName: "Brimley",
    company: "Thoughtstorm",
    jobTitle: "Staff Accountant I",
    state: "Virginia",
    isSiteAdmin: true,
    dateJoined: "8/17/2021"
  },
  {
    id: 12,
    firstName: "Saxe",
    lastName: "Plait",
    company: "Brainsphere",
    jobTitle: "Senior Financial Analyst",
    state: "New York",
    isSiteAdmin: true,
    dateJoined: "11/6/2021"
  },
  {
    id: 13,
    firstName: "Vite",
    lastName: "Langton",
    company: "Thoughtmix",
    jobTitle: "Editor",
    state: "Ohio",
    isSiteAdmin: false,
    dateJoined: "9/6/2021"
  },
  {
    id: 14,
    firstName: "Charlton",
    lastName: "Filintsev",
    company: "Divavu",
    jobTitle: "Associate Professor",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "4/15/2022"
  },
  {
    id: 15,
    firstName: "Jessika",
    lastName: "Messent",
    company: "Riffpedia",
    jobTitle: "Sales Representative",
    state: "North Dakota",
    isSiteAdmin: false,
    dateJoined: "12/16/2021"
  },
  {
    id: 16,
    firstName: "Shaw",
    lastName: "Huntington",
    company: "Jabbercube",
    jobTitle: "Dental Hygienist",
    state: "Kentucky",
    isSiteAdmin: false,
    dateJoined: "12/6/2021"
  },
  {
    id: 17,
    firstName: "Dorris",
    lastName: "Elderkin",
    company: "Centidel",
    jobTitle: "Cost Accountant",
    state: "Virginia",
    isSiteAdmin: true,
    dateJoined: "11/24/2021"
  },
  {
    id: 18,
    firstName: "Gilly",
    lastName: "Grishagin",
    company: "Zoomzone",
    jobTitle: "Clinical Specialist",
    state: "Texas",
    isSiteAdmin: true,
    dateJoined: "2/9/2022"
  },
  {
    id: 19,
    firstName: "Clarice",
    lastName: "Renouf",
    company: "Thoughtbridge",
    jobTitle: "Administrative Officer",
    state: "District of Columbia",
    isSiteAdmin: false,
    dateJoined: "4/24/2022"
  },
  {
    id: 20,
    firstName: "Ailey",
    lastName: "Burney",
    company: "Abata",
    jobTitle: "Sales Representative",
    state: "Texas",
    isSiteAdmin: true,
    dateJoined: "1/22/2022"
  },
  {
    id: 21,
    firstName: "Rosene",
    lastName: "Banishevitz",
    company: "Twitterbeat",
    jobTitle: "Social Worker",
    state: "New York",
    isSiteAdmin: true,
    dateJoined: "11/27/2021"
  },
  {
    id: 22,
    firstName: "Kristos",
    lastName: "Odney",
    company: "Skiba",
    jobTitle: "Human Resources Assistant I",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "5/25/2022"
  },
  {
    id: 23,
    firstName: "Marie-jeanne",
    lastName: "Gobourn",
    company: "Twitterbridge",
    jobTitle: "Speech Pathologist",
    state: "New York",
    isSiteAdmin: false,
    dateJoined: "9/7/2021"
  },
  {
    id: 24,
    firstName: "Kingston",
    lastName: "Fidelus",
    company: "Snaptags",
    jobTitle: "Administrative Officer",
    state: "California",
    isSiteAdmin: false,
    dateJoined: "8/28/2021"
  },
  {
    id: 25,
    firstName: "Alick",
    lastName: "Applewhite",
    company: "Yombu",
    jobTitle: "Geological Engineer",
    state: "Wisconsin",
    isSiteAdmin: false,
    dateJoined: "2/20/2022"
  },
  {
    id: 26,
    firstName: "Babb",
    lastName: "Pellamont",
    company: "Zava",
    jobTitle: "Assistant Manager",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "8/10/2021"
  },
  {
    id: 27,
    firstName: "Blakelee",
    lastName: "Meekin",
    company: "Fliptune",
    jobTitle: "Help Desk Technician",
    state: "District of Columbia",
    isSiteAdmin: false,
    dateJoined: "9/26/2021"
  },
  {
    id: 28,
    firstName: "Kelci",
    lastName: "Celes",
    company: "Nlounge",
    jobTitle: "Database Administrator IV",
    state: "Oklahoma",
    isSiteAdmin: true,
    dateJoined: "9/13/2021"
  },
  {
    id: 29,
    firstName: "Clemmy",
    lastName: "Will",
    company: "Oyope",
    jobTitle: "Staff Accountant I",
    state: "Texas",
    isSiteAdmin: true,
    dateJoined: "1/9/2022"
  },
  {
    id: 30,
    firstName: "Des",
    lastName: "Andrich",
    company: "Buzzster",
    jobTitle: "Paralegal",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "6/9/2022"
  },
  {
    id: 31,
    firstName: "Imojean",
    lastName: "Fermin",
    company: "Thoughtsphere",
    jobTitle: "Account Representative I",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "4/23/2022"
  },
  {
    id: 32,
    firstName: "Cart",
    lastName: "Aitken",
    company: "Buzzster",
    jobTitle: "Engineer III",
    state: "Indiana",
    isSiteAdmin: false,
    dateJoined: "11/18/2021"
  },
  {
    id: 33,
    firstName: "Karlene",
    lastName: "Macura",
    company: "Tazzy",
    jobTitle: "Human Resources Manager",
    state: "New York",
    isSiteAdmin: false,
    dateJoined: "11/30/2021"
  },
  {
    id: 34,
    firstName: "Krystyna",
    lastName: "Hugonneau",
    company: "Tavu",
    jobTitle: "Budget/Accounting Analyst I",
    state: "Georgia",
    isSiteAdmin: false,
    dateJoined: "4/28/2022"
  },
  {
    id: 35,
    firstName: "Donetta",
    lastName: "Kalinsky",
    company: "Topicware",
    jobTitle: "Assistant Manager",
    state: "Texas",
    isSiteAdmin: false,
    dateJoined: "12/2/2021"
  },
  {
    id: 36,
    firstName: "Ceciley",
    lastName: "Hain",
    company: "Brightbean",
    jobTitle: "Research Associate",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "1/11/2022"
  },
  {
    id: 37,
    firstName: "Starr",
    lastName: "Quinlan",
    company: "Oyonder",
    jobTitle: "VP Product Management",
    state: "Illinois",
    isSiteAdmin: true,
    dateJoined: "8/31/2021"
  },
  {
    id: 38,
    firstName: "Chandal",
    lastName: "Baskeyfied",
    company: "Centidel",
    jobTitle: "Nuclear Power Engineer",
    state: "Florida",
    isSiteAdmin: true,
    dateJoined: "8/11/2021"
  },
  {
    id: 39,
    firstName: "Georgianna",
    lastName: "Ferran",
    company: "Jabbersphere",
    jobTitle: "Payment Adjustment Coordinator",
    state: "New York",
    isSiteAdmin: false,
    dateJoined: "11/21/2021"
  },
  {
    id: 40,
    firstName: "Baudoin",
    lastName: "Nesbit",
    company: "Kwinu",
    jobTitle: "Research Nurse",
    state: "Connecticut",
    isSiteAdmin: false,
    dateJoined: "1/9/2022"
  },
  {
    id: 41,
    firstName: "Thaxter",
    lastName: "Sheriff",
    company: "Kazio",
    jobTitle: "Human Resources Assistant IV",
    state: "Ohio",
    isSiteAdmin: false,
    dateJoined: "2/23/2022"
  },
  {
    id: 42,
    firstName: "Leola",
    lastName: "Eake",
    company: "Jabbercube",
    jobTitle: "Data Coordiator",
    state: "New York",
    isSiteAdmin: false,
    dateJoined: "3/30/2022"
  },
  {
    id: 43,
    firstName: "Kara-lynn",
    lastName: "Prescot",
    company: "Twimbo",
    jobTitle: "Account Executive",
    state: "North Carolina",
    isSiteAdmin: true,
    dateJoined: "12/6/2021"
  },
  {
    id: 44,
    firstName: "Wynne",
    lastName: "Waleran",
    company: "Mydeo",
    jobTitle: "Assistant Manager",
    state: "New York",
    isSiteAdmin: true,
    dateJoined: "6/12/2022"
  },
  {
    id: 45,
    firstName: "Pail",
    lastName: "Litterick",
    company: "Skidoo",
    jobTitle: "Environmental Specialist",
    state: "Louisiana",
    isSiteAdmin: true,
    dateJoined: "6/11/2022"
  },
  {
    id: 46,
    firstName: "Fran",
    lastName: "Geere",
    company: "Jatri",
    jobTitle: "Assistant Professor",
    state: "Maryland",
    isSiteAdmin: true,
    dateJoined: "10/7/2021"
  },
  {
    id: 47,
    firstName: "Levin",
    lastName: "Ferris",
    company: "Oyope",
    jobTitle: "Recruiter",
    state: "Texas",
    isSiteAdmin: false,
    dateJoined: "11/23/2021"
  },
  {
    id: 48,
    firstName: "Rhett",
    lastName: "Noni",
    company: "Jatri",
    jobTitle: "Senior Developer",
    state: "Oregon",
    isSiteAdmin: true,
    dateJoined: "7/17/2021"
  },
  {
    id: 49,
    firstName: "Oralie",
    lastName: "Wratten",
    company: "Gabtune",
    jobTitle: "Human Resources Assistant IV",
    state: "Maryland",
    isSiteAdmin: true,
    dateJoined: "3/6/2022"
  },
  {
    id: 50,
    firstName: "Sashenka",
    lastName: "Powdrell",
    company: "Gigaclub",
    jobTitle: "Nurse",
    state: "California",
    isSiteAdmin: true,
    dateJoined: "9/24/2021"
  }
];

export default data;
