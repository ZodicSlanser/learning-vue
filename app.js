const app = Vue.createApp({
  data() {
    return {
      user: { name: "John", age: 25 },
      bookCoverURI: "/assets/",
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          age: 45,
          cover: "1.jpg",
       
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          age: 50,
          cover: "3.jpg",
        },
        {
          title: "The Hero of Ages",
          author: "Brandon Sanderson",
          age: 55,
          cover: "2.jpg",
          isFav: true,
        },
      ],
      loggedIn: false,
      showBooks: false,
      loginText: "Log in",
      events: [],
      x: 0,
      y: 0,
      githubURL: "https://github.com/ZodicSlanser",
    };
  },
  methods: {
    // changeBook(title, author, age) {
    //   this.book.title = title;
    //   this.book.author = author;
    //   this.book.age = age;
    // },
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    login() {
      this.loggedIn = !this.loggedIn;
      if (this.loggedIn) {
        this.showBooks = true;
        this.loginText = "Log out";
      } else {
        this.showBooks = false;
        this.loginText = "Log in";
      }
    },
    handleEvent(e) {
      console.log(e);
      console.log(e.type + " Event handled");
      this.events.push(e);
    },
    printDifference() {
      console.log(getDifferencesTable(this.events));
    },
    handleMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    setFav(book) {
      book.isFav = !book.isFav;
    }
  },
    computed: {
        favBooks() {
        return this.books.filter((book) => book.isFav);
        },
    },
});

app.mount("#app");

function getDifferencesTable(objects) {
  const allProperties = new Set();
  const objectTypes = new Set(objects.map((obj) => obj.constructor.name));

  for (const obj of objects) {
    Object.keys(obj).forEach((prop) => allProperties.add(prop));
  }

  let table = "";
  for (const type of objectTypes) {
    table += ` | ${type}`;
  }
  table += "\n";

  table += "-".repeat(table.length - 1) + "\n";

  for (const prop of allProperties) {
    let hasDifference = false;
    let row = prop;
    for (const obj of objects) {
      if (obj.hasOwnProperty(prop)) {
        row += ` | ${obj[prop]}`;
        hasDifference = true;
      } else {
        row += " | -";
      }
    }
    if (hasDifference) {
      table += row + "\n";
    }
  }

  return table;
}
