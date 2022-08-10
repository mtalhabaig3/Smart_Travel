const mocks = [
  {
    id: 1,
    user: {
      name: "Ibrahim baig",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    saved: false,
    location: "Santorini, Greece",
    temperature: 24,
    title: "Santorini",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzM2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1548580392-8d9c772d854e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzQyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1491955524898-bdbdb5668abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzQ1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1508957999498-e7a5e89ba28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzUxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 2,
    user: {
      name: "Hassan baig",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    saved: false,
    location: "Loutraki, Greece",
    temperature: 28,
    title: "Loutraki",
    description:
      "Loutraki (Greek: Λουτράκι) is a seaside resort on the Gulf of Corinth, in Corinthia, Greece. It is located 81 kilometres (50 miles) west of Athens and 8 kilometres (5 miles) northeast of Corinth. Loutraki is the seat of the municipality Loutraki-Perachora-Agioi Theodoroi. The town is known for its vast natural springs and its therapeutic spas. There are many tourists who visit Loutraki every year (especially in summer) because of its crystal clear sea.",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1632374151695-3e7bf0274c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzc5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1632374151649-2cd26a7f04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzk5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1580110108759-081cacaa7484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMzg5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 3,
    user: {
      name: "Abdullah baig",
      avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    saved: false,
    location: "Mecca, Saudi Arabia",
    temperature: 37,
    title: "Mecca",
    description:
      "Makkah - is a city and administrative center of the Mecca Province of Saudi Arabia, and the holiest city in Islam.[2] It is 70 km (43 mi) inland from Jeddah on the Red Sea, in a narrow valley 277 m (909 ft) above sea level. Its last recorded population was 1,578,722 in 2015.[3] Its estimated metro population in 2020 is 2.042 million, making it the third-most populated city in Saudi Arabia after Riyadh and Jeddah. Pilgrims more than triple this number every year during the Ḥajj pilgrimage, observed in the twelfth Hijri month of Dhūl-Ḥijjah.",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMjMxOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1633546707050-88e2b545831c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDEwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1588987278192-09fd57dd55ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDI5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1565828480412-f95f33fe9e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDIxMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 4,
    user: {
      name: "Musa baig",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    saved: false,
    location: "Medina, Saudi Arabia",
    temperature: 38,
    title: "Medina",
    description:
      "Medina the second-holiest city in Islam, and the capital of the Medina Province of Saudi Arabia. As of 2020, the estimated population of the city is 1,488,782,[2] making it the fourth-most populous city in the country.[3] Located at the core of the Medina Province in the western reaches of the country, the city is distributed over 589 km2 (227 sq mi), of which 293 km2 (113 sq mi) constitutes the city's urban area, while the rest is occupied by the Hejaz Mountains, empty valleys, agricultural spaces and older dormant volcanoes.",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNDYyNjY0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    images: [
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNDYyNjY0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      "https://images.unsplash.com/photo-1551041777-575d3855ca71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
];
const mocks2 = [
  {
    id: 1,
    user: {
      name: "Ayub baig",
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    saved: false,
    location: "Murree, Pakistan",
    temperature: 16,
    title: "Murree",
    description:
      " Murree is a mountain resort town, located in the Galyat region of the Pir Panjal Range, within the Muree District of Punjab, Pakistan. It forms the outskirts of the Islamabad-Rawalpindi metropolitan area, and is about 30 km (19 mi) northeast of Islamabad. It has average altitude of 2,291 metres (7,516 ft). The British built this town during their rule to escape the scorching heat in the plains of Punjab during the summer.[3][4].",
    rating: 4.8,
    reviews: 3252,
    preview:
      "https://images.unsplash.com/photo-1555758478-4d218146e8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQzNTUyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1591724947493-8f9b38e824c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQzNjU0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1585884839577-2d191de96c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQzNjYwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1644260513969-1b6dbb353667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQzNjY1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1623057414755-f4b2f9d01c47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQzNjY5MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 2,
    user: {
      name: "Tanzeel baig",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    saved: false,
    location: "Lahore, Pakistan",
    temperature: 34,
    title: "Lahore",
    description:
      "Lahore is the capital of the Pakistani province of Punjab, is Pakistan's 2nd largest city after Karachi, and is the 26th largest city in the world.[14] Lahore is the largest city of Punjab. Lahore is one of Pakistan's wealthiest cities with an estimated GDP (PPP) of $84 billion as of 2019.[12][13] It is the largest city and historic cultural centre of the greater Punjab region,[15][16][17][18] and is one of Pakistan's most socially liberal,[19] progressive,[20] and cosmopolitan cities.[21]",
    rating: 4.9,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1617128072203-310a93722ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTM2NjIxMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQ0MDIwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1531804308561-b6438d25a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQ0MDI0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1601969695489-f10a1da1756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQ0MDMxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 3,
    user: {
      name: "Abdullah baig",
      avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    saved: false,
    location: "Mecca, Saudi Arabia",
    temperature: 37,
    title: "Mecca ",
    description:
      "Makkah - is a city and administrative center of the Mecca Province of Saudi Arabia, and the holiest city in Islam.[2] It is 70 km (43 mi) inland from Jeddah on the Red Sea, in a narrow valley 277 m (909 ft) above sea level. Its last recorded population was 1,578,722 in 2015.[3] Its estimated metro population in 2020 is 2.042 million, making it the third-most populated city in Saudi Arabia after Riyadh and Jeddah. Pilgrims more than triple this number every year during the Ḥajj pilgrimage, observed in the twelfth Hijri month of Dhūl-Ḥijjah.",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxMjMxOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1633546707050-88e2b545831c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDEwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1588987278192-09fd57dd55ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDI5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1565828480412-f95f33fe9e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDIxMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 4,
    user: {
      name: "Musa baig",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    saved: false,
    location: "Medina, Saudi Arabia",
    temperature: 38,
    title: "Medina",
    description:
      "Medina the second-holiest city in Islam, and the capital of the Medina Province of Saudi Arabia. As of 2020, the estimated population of the city is 1,488,782,[2] making it the fourth-most populous city in the country.[3] Located at the core of the Medina Province in the western reaches of the country, the city is distributed over 589 km2 (227 sq mi), of which 293 km2 (113 sq mi) constitutes the city's urban area, while the rest is occupied by the Hejaz Mountains, empty valleys, agricultural spaces and older dormant volcanoes.",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNDYyNjY0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    images: [
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNDYyNjY0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      "https://images.unsplash.com/photo-1551041777-575d3855ca71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTQxNDQyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 5,
    user: {
      name: "Yahya baig",
      avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    },
    saved: false,
    location: "Tallinn, Estonia",
    temperature: 27,
    title: "Tallinn",
    description:
      "Tallinn is the most populous, primate, and capital city of Estonia. Situated on a bay in north Estonia, on the shore of the Gulf of Finland of the Baltic Sea, Tallinn has a population of 437,811 (as of 2022)[1] and administratively lies in the Harju maakond (county). Tallinn is the main financial, industrial, and cultural centre of Estonia. It is located 187 km (116 mi) northwest of the country's second largest city Tartu,",
    rating: 4.7,
    reviews: 3912,
    preview:
      "https://images.unsplash.com/photo-1601297830297-738d875c18c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NTI4MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1452868195396-89c1af3b1b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODQ4ODMzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1575561003164-f36f2e28a524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NTMzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1560617138-defc439d233e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NTQyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
  {
    id: 6,
    user: {
      name: "Khizar baig",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    saved: false,
    location: "Tokyo, Japan",
    temperature: 30,
    title: "Tokyo",
    description:
      "Tokyo is the capital[8] and largest city of Japan. Its metropolitan area is the most populous in the world,[5] with an estimated 37.468 million residents in 2018. Its metropolitan area is the largest in size and the most populous, with an area of 13,452 square kilometers and its city proper has a population of 13.99 million people.[9] Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government.",
    rating: 4.9,
    reviews: 5212,
    preview:
      "https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NjA1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    images: [
      "https://images.unsplash.com/photo-1544885935-98dd03b09034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NjAyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1533050487297-09b450131914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NTkxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1542931287-023b922fa89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTk1NjEwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ],
  },
];

export { mocks, mocks2 };
