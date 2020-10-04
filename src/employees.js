const Employees = [
  {
    id: 1,
    name: "Bingus Taylor",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120265888_2408097406160685_3365173687748891926_o.jpg?_nc_cat=100&_nc_sid=da1649&_nc_ohc=rZdnA1OWwbEAX-iQGgf&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=388ed6cfc7730fd397f5b9b9c5d31b3e&oe=5F9C880A",
    occupation: "Technician",
    email: "bTaylor@gmail.com",
    phone: "408-518-6302",
  },
  {
    id: 2,
    name: "Reginald Hungus",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120189529_2407439069559852_1357225731243494634_o.jpg?_nc_cat=102&_nc_sid=da1649&_nc_ohc=XD3MJJTGjAEAX9i3tT9&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=e470365af1893f0fc8b2b4a7ac57da31&oe=5F9ACB20",
    occupation: "Technician",
    email: "rHungus@gmail.com",
    phone: "941-235-8592",
  },
  {
    id: 3,
    name: "Filert Marams",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/120345263_2407236416246784_8838663362023071997_o.jpg?_nc_cat=106&_nc_sid=da1649&_nc_ohc=5PgfFvI_w5QAX9IjlL1&_nc_ht=scontent.fphx1-1.fna&tp=7&oh=31e0c5bd4dcc866f2b1395b5e4bf536d&oe=5F9C9788",
    occupation: "Supervisor",
    email: "kringus@gmail.com",
    phone: "417-858-6050",
  },
  {
    id: 4,
    name: "Targus Lawndoodle",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120198196_2406635196306906_4245611517202115538_o.jpg?_nc_cat=103&_nc_sid=da1649&_nc_ohc=To3vMy8kvJwAX8DIkMD&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=86324269315d32ee75f81bedb5ed7b1f&oe=5F9C6123",
    occupation: "Technician",
    email: "tonoffun@yahoo.com",
    phone: "469-635-6844",
  },
  {
    id: 5,
    name: "Emerson Spangus",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120303343_2405578546412571_3704530431096585821_o.jpg?_nc_cat=100&_nc_sid=da1649&_nc_ohc=b5-AMTUVjiYAX9kYQ9R&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=a9c47050caeed84173c73057841fef13&oe=5F9A46C9",
    occupation: "Lumberjack",
    email: "iloveturkey@aol.com",
    phone: "508-459-5382",
  },
  {
    id: 6,
    name: "Tim Salad",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/120202467_2404660566504369_6068304771842480232_o.jpg?_nc_cat=107&_nc_sid=da1649&_nc_ohc=CzSIQkjUs_QAX_-Q6kl&_nc_ht=scontent.fphx1-1.fna&tp=6&oh=41fddc5cfac9bd6b27f2a899527fdd88&oe=5F9C2308",
    occupation: "Lumberjack",
    email: "bigcattim@aol.com",
    phone: "704-349-1255",
  },
  {
    id: 7,
    name: "Sally Stereo-Radio",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120139349_2403826406587785_5098717782885208338_o.jpg?_nc_cat=104&_nc_sid=da1649&_nc_ohc=1Zj0-01CH-sAX9WMpgV&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=e9e2ffab041f8b470e92f51d22544b25&oe=5F9CB080",
    occupation: "Technician",
    email: "wakeup@gmail.com",
    phone: "601-817-4898",
  },
  {
    id: 8,
    name: "Tobias Tippertongus",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120192078_2403111549992604_520337976931827478_o.jpg?_nc_cat=103&_nc_sid=da1649&_nc_ohc=cN6k_OG8NtwAX8Z6T5y&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=26d2c00e5269c2e25a4226d739877829&oe=5F9A9F46",
    occupation: "Supervisor",
    email: "birdwatching123@yahoo.com",
    phone: "215-865-8660",
  },
  {
    id: 9,
    name: "Tilbo Tonka",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/119944398_2401510603486032_451570424052340196_o.jpg?_nc_cat=108&_nc_sid=da1649&_nc_ohc=K3nJ7gcmhIgAX8JX-kV&_nc_ht=scontent.fphx1-1.fna&tp=7&oh=88dc59d8d9bce484a4c8a73fccc79c55&oe=5F9CCE46",
    occupation: "CEO",
    email: "spaghettiwoman@lycos.com",
    phone: "707-755-8385",
  },
  {
    id: 10,
    name: "Spiffy Tangus",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/120075185_2401296836840742_8336943012323112122_o.jpg?_nc_cat=105&_nc_sid=da1649&_nc_ohc=OQL9RY_sEB0AX-vW7DZ&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=b44060cb42df146db4fe9014deba2c6a&oe=5F9D88D8",
    occupation: "Technician",
    email: "sTangus@gmail.com",
    phone: "6022589327",
  },
  {
    id: 11,
    name: "Bildus Baldonado",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/119944839_2400465383590554_6458784703406682885_o.jpg?_nc_cat=104&_nc_sid=da1649&_nc_ohc=Qji7aiCguCsAX8wqsFX&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=957a0ab321265a27979ae3b48599b087&oe=5F9BBC51",
    occupation: "Supervisor",
    email: "buildus@gmail.com",
    phone: "606-920-4927",
  },
  {
    id: 12,
    name: "Greg Seashell",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/119515923_2397604410543318_7290565036367408199_o.jpg?_nc_cat=101&_nc_sid=da1649&_nc_ohc=HSTgqA9mL5EAX9FQd4l&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=eb084e3debaabaccd6d926d22b7f6feb&oe=5F9BB64C",
    occupation: "Technician",
    email: "seashore@gmail.com",
    phone: "631-989-1095",
  },
  {
    id: 13,
    name: "Tibby Tractorthighs",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/119600785_2395677624069330_1236922256451504274_o.jpg?_nc_cat=104&_nc_sid=da1649&_nc_ohc=Hp7JcgO-yMYAX9jvln3&_nc_oc=AQkSlhpz6hqLVj-Y9nTMao3B_D-Zpgmtgmcu6zdAu4aB37AIXgIXj9mw_NHNar7AxeE&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=34df30913b6f646bbcb81126bbdfcd4f&oe=5F9CBAD2",
    occupation: "Lumberjack",
    email: "johndeere91@gmail.com",
    phone: "410-659-2429",
  },
  {
    id: 14,
    name: "Timvert Skindog",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/119665681_2395471690756590_304265998923957517_o.jpg?_nc_cat=105&_nc_sid=da1649&_nc_ohc=7ps9TUEkJXkAX9Jdb7q&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=a64bad373a94b90ae6c7f0ebabcbfa62&oe=5F9ACC03",
    occupation: "Lumberjack",
    email: "whereisthewolf@gmail.com",
    phone: "910-865-6625",
  },
  {
    id: 15,
    name: "Pauline Cul VanDerBeer",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/119215177_2394199077550518_4455095187806333957_o.jpg?_nc_cat=107&_nc_sid=da1649&_nc_ohc=tPmupALTNvgAX9C6kMj&_nc_ht=scontent.fphx1-1.fna&tp=6&oh=360daf58ffb2d22297cb711b81685663&oe=5F9A2900",
    occupation: "Lumberjack",
    email: "budmillercoors@gmail.com",
    phone: "631-896-2709",
  },
  {
    id: 16,
    name: "Greedus Smort",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/p720x720/119249002_2393138354323257_8699778473927685013_o.jpg?_nc_cat=111&_nc_sid=da1649&_nc_ohc=9L9t3_bTyOgAX_rQi7w&_nc_ht=scontent.fphx1-1.fna&tp=6&oh=a70a29e17f1bb5fc23c03cc5c97d78be&oe=5F9BAAFE",
    occupation: "Technician",
    email: "rootof@gmail.com",
    phone: "218-768-6669",
  },
  {
    id: 17,
    name: "Bill Shorts",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/118287072_3245396628877379_1197767025674695411_n.jpg?_nc_cat=107&_nc_sid=1480c5&_nc_ohc=NLFW_f1AtQwAX_0rH6R&_nc_ht=scontent.fphx1-1.fna&oh=c9b0232b408b33239064eeadf59826c7&oe=5F9CA65F",
    occupation: "Specialist",
    email: "lawpants@gmail.com",
    phone: "616-850-1622",
  },
  {
    id: 18,
    name: "Crim Skongus",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/118209542_2372904906346602_3961508742806584691_o.jpg?_nc_cat=103&_nc_sid=da1649&_nc_ohc=-qy-edQWpe0AX_gad3z&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=6719959bfc08eca2faad4178947cf9aa&oe=5F9DA501",
    occupation: "Specialist",
    email: "csk2@gmail.com",
    phone: "630-357-0419",
  },
  {
    id: 19,
    name: "Larry Firetruck",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/p960x960/117711369_2370570186580074_739955202420871777_o.jpg?_nc_cat=108&_nc_sid=da1649&_nc_ohc=jYkQtkO7Z2YAX9tv0N9&_nc_ht=scontent.fphx1-1.fna&tp=6&oh=7a28a5f8ab5849e00605750ab81136a7&oe=5F9DE84B",
    occupation: "Specialist",
    email: "fireisbad@gmail.com",
    phone: "435-247-9389",
  },
  {
    id: 20,
    name: "Lidia Longpants",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/s960x960/117924131_2368973833406376_773865322366031177_o.jpg?_nc_cat=108&_nc_sid=da1649&_nc_ohc=AAS0gyvDWTEAX9ffXRs&_nc_ht=scontent.fphx1-1.fna&tp=7&oh=9f470ea243911603d952239cc697c9e3&oe=5F9D504D",
    occupation: "Technician",
    email: "dontweardress@gmail.com",
    phone: "615-474-5962",
  },
  {
    id: 21,
    name: "Sagitarrius Stronghand",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/117118815_2361488124154947_8283777011443977589_o.jpg?_nc_cat=100&_nc_sid=da1649&_nc_ohc=n1OFp-1mSxQAX-_QuOa&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=e88d6e511860d70b989a254e1af63f52&oe=5F9B3E33",
    occupation: "Specialist",
    email: "astrologyisfun@gmail.com",
    phone: "831-454-9774",
  },
  {
    id: 22,
    name: "Mildred Milktoast",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/p960x960/116209457_2360833320887094_1392745234954676266_o.jpg?_nc_cat=105&_nc_sid=da1649&_nc_ohc=ynrqO-Xo4qkAX8tSQmN&_nc_ht=scontent.fphx1-2.fna&tp=6&oh=8c6c5f96364c490eb9839cc2bbd103cf&oe=5F9B022B",
    occupation: "Lumberjack",
    email: "iwearahelmet@gmail.com",
    phone: "248-297-5318",
  },
  {
    id: 23,
    name: "Ray Tibble",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/109676332_10157654724262914_4403224420714224690_n.jpg?_nc_cat=108&_nc_sid=1480c5&_nc_ohc=wuW9nDaB4U0AX-K1_S-&_nc_ht=scontent.fphx1-1.fna&oh=7b37b8f1312d38acd3bea4ccfa38b696&oe=5F9D7610",
    occupation: "Technician",
    email: "callmeray@gmail.com",
    phone: "623-322-6358",
  },
  {
    id: 24,
    name: "Paul Deeb",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/110654608_2354310391539387_4371911134559667836_o.jpg?_nc_cat=105&_nc_sid=da1649&_nc_ohc=CgQ0K9qfdDYAX-DaDaJ&_nc_oc=AQlEldQl6RtuoGqAXqVfqZw4epj0G2xXyAPtKVBGwvjsNf2yCMbUOvH9qrwB_gZrbs4&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=2560097826ea9487e8da2778c1bdeeff&oe=5F9D42A2",
    occupation: "Specialist",
    email: "pDibs@gmail.com",
    phone: "830-514-3541",
  },
  {
    id: 25,
    name: "Sal Kringle",
    image:
      "https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/107611067_2347010948935998_6164203071818110960_n.jpg?_nc_cat=111&_nc_sid=da1649&_nc_ohc=SffWAHbgTuAAX_EfIpl&_nc_ht=scontent.fphx1-1.fna&oh=cc073e23976cca4670277c6d7b490b16&oe=5F9D986A",
    occupation: "Technician",
    email: "salyourself@gmail.com",
    phone: "619-352-8538",
  },
  {
    id: 26,
    name: "Donny Donbean",
    image:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/s960x960/120098866_2404022486568177_1751298674284966280_o.jpg?_nc_cat=104&_nc_sid=da1649&_nc_ohc=HEht1QSgP8wAX-P9wZA&_nc_ht=scontent.fphx1-2.fna&tp=7&oh=4054f62db309949256fc0a03c7bf9bc9&oe=5F9C97F0",
    occupation: "Specialist",
    email: "coffeeisbeans@gmail.com",
    phone: "702-821-3130",
  },
];

export default Employees;