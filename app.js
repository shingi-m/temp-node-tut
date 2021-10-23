// **********************OS MODULE***********

// const os = require("os");

// // info about current user

// const user = os.userInfo();
// console.log(user);

// // method return system uptime in seconds
// console.log(`System uptime is ${os.uptime()}`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMEM: os.totalmem(),
//   freeMEM: os.freemem(),
// };

// console.log(currentOS);

// **************PATH MODULE***************
// const path = require("path");

// console.log(path.sep);

// const filePath = path.join("content", "subfolder", "test.txt");

// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, filePath);
// console.log(absolute);

// ***********FS-SYNC AND FS-ASYNC MODULE******
// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log("\n", first, "\n", second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}\n${second}, `,
//   { flag: "a" }
// );

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;

//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first} ${second}`,
//       (err, results) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

// *************HTTP MODULE*********

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Welcome to Shingas Home page");
//     res.end();
//   }
// });

// server.listen(5000);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
