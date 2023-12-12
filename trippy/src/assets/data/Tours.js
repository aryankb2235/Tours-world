import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const Tours = [
    {
        id:"01",
        title : "Pookode Lake",
        city : "Wayanad",
        distance : 15,
        address :': Kunnathidavaka, Kerala, 673576, Wayanad',
        price : 100,
        maxGroupSize : 10,
        desc : "The beautiful freshwater lake in Wayanad, Pookode Lake lays 15 kilometre away from Kalpetta. Nestled between evergreen forest and Western Ghats, the lake is spread over 13 acre and is 40 m deep. This is one of the most preferred tourist destinations in Wayanad.",
        reviews : [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "alfred",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        photo: tourImg01,
        featured: true,
    },

    {
        id:"02",
        title: "The Pazhassi Raja Museum",
        city: "Kozhikode",
        distance: 5,
        address:'Kendriya Vidyalaya Rd, Kozhikode,673005',
        price: 30,
        maxGroupSize: 8,
        desc: "A veritable treasure trove for historians and connoisseurs of art, the Pazhassi Raja Museum is located in Kozhikode. The Pazhassi Raja Museum & Art Gallery adjacent to the museum displays the acclaimed paintings of Kerala's cherished artists, Raja Ravi Varma (1848 - 1906) whose works brought international repute to the State and his uncle Raja Raja Varma.",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg02,
        featured: true,
    },

    {
        id: "03",
        title: "Ramakkalmedu",
        city: "Idukki ",
        distance: 15,
        address:': Munnar-Thekkady Route, Nedumkandam, Kerala, 685553',
        price: 40,
        maxGroupSize : 8,
        desc: "Ramakkalmedu is a hill station located about 15 Km from Nedumkandom. The main tourism importance of this place is the presence of excellent wind from TamilNadu. Rolling green hills and the fresh mountain air make Ramakalmedu an enchanting retreat. The hills top also offers a panoramic view of picturesque villages of Bodi and Cumbum on the Eastern slop of the western ghats.",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg03,
        featured: true,
    },

    {
        id: "04",
        title: "Gavi",
        city: "Pathanamthitta ",
        distance: 109,
        address:'Vandiperiyar S.O PATHANAMTHITTA, KERALA',
        price: 500,
        maxGroupSize: 20,
        desc: "Gavi is an Eco-Tourism a project of the Kerala Forest Development Corporation located in Pathanamthitta district, Kerala. Gavi, located in Pathanamthitta district offers its visitors activities like trekking, wildlife watching, outdoor camping in specially built tents, and night safaris",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg04,
        featured: true,
    },

    {
        id: "05",
        title: "Krishnapuram Palace",
        city: "Alappuzha",
        distance: 500,
        address:'5G25+4C9, Oachira Rd, near Krishnapuram, Kayamkulam, Kerala 690533',
        price: 25,
        maxGroupSize: 8,
        desc: "Krishnapuram Palace, a rich source of the architectural tradition of Kerala belongs to the 18th century; had been built during the reign of Marthanda Varma (1729-1758), the maker of modern Travancore",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg05,
        featured: false,
    },

    {
        id: "06",
        title: "Vizhinjam Lighthouse",
        city: "Trivandrum",
        distance: 24,
        address:'Light house Junction, Vizhinjam,Kovalam, Kerala 695521',
        price: 50,
        maxGroupSize: 5,
        desc: "Vizhinjam Lighthouse or Trivandrum Lighthouse is situated near Kovalam beach in Kerala. It started functioning on 30 June 1972. Vizhinjam was a busy seaport in the eighteenth and nineteenth centuries",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
        ],
        avgRating: 4.5,
        photo: tourImg06,
        featured: false,
    },

    {
    id: "07",
    title: "St. Angelo Fort",
    city: "Kannur",
    distance: 4,
    address:'somewhere',
    price: 20,
    maxGroupSize: 8,
    desc: "The massive fort is triangular in shape and built of laterite. strong and parallel bastions,underground jails and secret tunnels stand testimony to the planning and the meticulous work that went into the construction of this strategic military base.",
    reviews: [
        {
            name: "jhon doe",
            rating: 4.6,
        },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
},


{
    id:"01",
    title : "Malampuzha Dam ",
    city : "Palakkad ",
    distance : 15,
    address :'MALAMPUZHA DAM,PALAKKAD,KERALA,678651 ',
    price : 25,
    maxGroupSize : 10,
    desc : "One of the largest reservoirs of Kerala, Malampuzha Dam is located near Palakkad in South India. It is surrounded by the Western Ghats on all side.",
    reviews : [
        {
            name: "jhon doe",
            rating: 4.6,
        },
        {
            name: "alfred",
            rating: 5,
        },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
},
];

export default Tours;
