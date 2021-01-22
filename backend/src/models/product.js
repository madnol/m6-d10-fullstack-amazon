// const database = require("./database");

// class Model {
//   constructor(name) {
//     this.name = name;
//   }

//   async run(query) {
//     //WE ARE GONNA USE THIS EVERYTIME WE SEND A QUERY TO THE DATABASE
//     try {
//       const response = await database.query(query);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   //POST METHOD
//   async save(body) {
//     if (!body || Object.values(body).length === 0) {
//       throw new Error("give me a body!");
//     }
//     const entries = Object.entries(body);
//     const query = `INSERT INTO ${this.name} (${entries.map(
//       entry => entry[0]
//     )}) VALUES(${entries.map(entry => `'${entry[1]}'`)})`;
//     const response = await this.run(query);
//     return response;
//   }
// }
