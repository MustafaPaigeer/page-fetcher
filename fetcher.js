const fs = require('fs');
const request = require('request');

const download = (url, dest) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("failed", error);
      return;
    }
    fs.readFile(dest, 'utf-8', (error) => {
      if (error) {
        fs.writeFile(dest, body, (error) => {
          if (error) {
            console.log("failed ", error);
          } else {
            console.log(`Downloaded and saved ${body.length}  bytes to ${dest}`);
          }
        });
        return;
      }
      console.log("File already  exists");
    });
  });
};

const args = process.argv.slice(2);
download(args[0], args[1]);

