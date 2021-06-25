// const {data, license} = arrayThatIPassInHere;
// or just have data be an object and access license via data.license
// although I should learn deconstructuring

// EITHER I WILL INPORT FS HERE OR I CAN DO IT FROM INDEX - Choose clean code
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadges(username, repo, license) {
  let ret = ""
  ret += `
![Analysis](https://img.shields.io/github/languages/top/${username}/${repo})`
  if (license){
    ret += `
![License](https://img.shields.io/github/license/${username}/${repo})
  `
  }
  return ret
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
https://img.shields.io/github/license/${githubUsername}/${githubRepo}
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ${renderLicenseLink}
  `
  } else { return [] }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log("GENERATE MARKDOWN!")
  console.log(data)

  let addSections = "";

  if (data.title) { //it's required!!
    addSections += `
# ${data.title}
`
  }

  // add badges to top of readme
  addSections += `
${renderBadges(data.github, data.repo, data.license)}`


  if (data.description) {
    addSections += `
## Description
${data.description}
`
  }

  // TABLE OF CONTENTS
  addSections += tableOContents(data)

  if (data.installation) {
    addSections += `
## Installation
${data.installation}
`
  }

  if (data.usage) {
    addSections += `
## Usage
${data.usage}
`
  }

  if (data.license) { // get into render license
    addSections += `
## License
This application is covered under
${renderLicenseLink}
`
  }

  if (data.contributing) {
    addSections += `
## Contributing
${data.contributing}
`
  }

  if (data.tests) {
    addSections += `
## Tests
${data.tests}
`
  }

  if (data.github && data.title) { //github is required
    addSections += `
## Questions
https://github.com/${data.github}/${data.repo}
`
  }

  if (data.email) {
    addSections += `
If there are any additional questions send me an email! 

${data.email}
`
  }
  return addSections
};

// Creates Table of Contents
function tableOContents(data) {
  const content = (Object.entries(data))
  let ret = "";
  let i = 2; //cut title and description
  ret += `
## Table of Contents`
  while (content[i][0] != 'github') {
    console.log(content[i][0])
    let header = content[i][0].charAt(0).toUpperCase() + content[i][0].slice(1);
    ret += `
* [${header}](#${content[i][0]})`
    i++;
  }
  ret += `
* [Questions](#questions)
`
  return ret;
}

module.exports = generateMarkdown;