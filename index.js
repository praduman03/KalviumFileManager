// Read and write file asynchronously

const fs = require("fs");

fs.writeFileSync(
  "sync.js",
  "“I love the Kalvium backend web development course”"
);

console.log(fs.readFileSync("sync.js", "utf-8"));

// Read and write file asynchronously

fs.writeFile(
  "async.js",
  "“I love the Kalvium backend web development course”",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

fs.readFile("async.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//Read the file synchronously and write the file asynchronously

fs.writeFileSync(
  "task3.js",
  "“I love the Kalvium backend web development course”"
);

fs.readFile("task3.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//Read the file asynchronously and write the file synchronously

fs.writeFile(
  "task4.js",
  "“I love the Kalvium backend web development course”",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

console.log(fs.readFileSync("task4.js", "utf-8"));
