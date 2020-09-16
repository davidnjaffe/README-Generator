// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}
                
![GitHub License](https://img.shields.io/badge/license-${data.license}-green.svg)

## Table of Contents
                                           
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Notes](#notes)
* [Questions](#questions)
                    
## Installation
                      
${data.installation}
                     
## Usage 
                      
${data.usage}

## Tests
                      
${data.tests}

## Contributing
                      
${data.contributing}
                    
## License
                      
Project license: ${data.license}

## Notes

${data.notes}
                                                        
## Questions
Let me know if you have any questions! Check out my [GitHub Profile](https://github.com/${data.username})                 
Or email me @ <${data.email}>
                      
`;
}

module.exports = generateMarkdown;
