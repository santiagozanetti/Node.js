commands.js;
const fs = require("fs");

module.exports = {
  pwd: function () {
    // Código pwd
    let ruta = process.argv;

    process.stdout.write(ruta.toString());
    process.stdout.write("\nprompt > ");
  },
  date: function () {
    let date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write("\nprompt > ");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (str) {
    let string = str + "\n";
    process.stdout.write(string.split(",").join(" ").trim());
    process.stdout.write("\nprompt > ");
  },
  cat: function (file) {
    file.forEach((fileName) => {
      fs.readFile(fileName, (err, data) => {
        if (err) {
          process.stdout.write(err);
        } else {
          process.stdout.write(data);
        }
        process.stdout.write("\nprompt > ");
      });
    });
  },
  head: function (file) {
    file.forEach((fileName) => {
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          process.stdout.write(err);
        } else {
          const lines = data.split("\n").slice(0, 5);
          const firstFiveLines = lines.join("\n");
          process.stdout.write(firstFiveLines);
        }
        process.stdout.write("\nprompt > ");
      });
    });
  },
  tail: function (file) {
    file.forEach((fileName) => {
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          process.stdout.write(err);
        } else {
          const lines = data.split("\n").slice(-5);
          const firstThreeLines = lines.join("\n");
          process.stdout.write(firstThreeLines);
        }
        process.stdout.write("\nprompt > ");
      });
    });
  },
  wc: function (file) {
    file.forEach((fileName) => {
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          process.stdout.write(err);
        } else {
          const lines = data.split("\n");
          console.log(lines);
          const firstFiveLines = lines.join("\n");
          process.stdout.write(firstFiveLines);
        }
        process.stdout.write("\nprompt > ");
      });
    });
  },
};
