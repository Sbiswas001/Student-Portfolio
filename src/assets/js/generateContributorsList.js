// public/src/assets/js/generateContributorsList.js

const fs = require("fs");
const path = require("path");

// Traverse up to root then into /contributors/
const contributorsDir = path.join(__dirname, "../../contributors");


const contributorFiles = [];

fs.readdirSync(contributorsDir).forEach((dir) => {
  const dirPath = path.join(contributorsDir, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    const htmlFiles = fs.readdirSync(dirPath).filter((file) => file.endsWith(".html"));
    if (htmlFiles.length > 0) {
      // Take the first .html file
      contributorFiles.push(`${dir}/${htmlFiles[0]}`);
    }
  }
});

const outputPath = path.join(contributorsDir, "contributors.json");

fs.writeFileSync(outputPath, JSON.stringify(contributorFiles, null, 2));

console.log("✅ contributors.json generated with", contributorFiles.length, "entries");
