const categories = [
  {
    id: "js",
    name: "Javascript",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/javascript.png")
  },
  {
    id: "css",
    name: "CSS",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/css.png")
  },
  {
    id: "html",
    name: "HTML",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/html.png")
  },
  {
    id: "node",
    name: "node",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/node.png")
  },
  {
    id: "c#",
    name: "C#",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/c#.png")
  },
  {
    id: "python",
    name: "Python",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/python.png")
  },
  {
    id: "java",
    name: "Java",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/java.png")
  },
  {
    id: "php",
    name: "PHP",
    tags: ["web"],
    count: 147
    // image: require("../assets/icons/php.png")
  }
];

const players = [
  {
    id: 1,
    name: "Reeady Player One",
    description: "GG - I win!",
    tags: ["high-elo", "brabo", "x1?"],
    images: []
  },
  {
    id: 2,
    name: "Noooob",
    description: "Where am I?",
    tags: ["digito no chat", "a culpa não é minha", "rage-quit"],
    images: []
  },
  {
    id: 3,
    name: "Marcelo Mattos",
    description: "Go Go Go",
    tags: ["mid", "high-elo", "strategist"],
    images: []
  },
  {
    id: 4,
    name: "Lindenberg",
    description: "Chama",
    tags: ["analyst", "boss", "mobile"],
    images: []
  },
  {
    id: 5,
    name: "Danilo Silva",
    description: "Runner",
    tags: ["marathon", "euro", "front-end"],
    images: []
  },
  {
    id: 6,
    name: "Gustavo Alexandrino",
    description: "Fight",
    tags: ["Prepare to fight", "front-end"],
    images: []
  }
];

const profile = {
  username: "Player One",
  location: "São Paulo, SP",
  email: "mechanics@codebattle.com",
  avatar: require("../assets/images/avatar.png"),
  rank: 1,
  score: 5000,
  notifications: true
};

export { categories, players, profile };
