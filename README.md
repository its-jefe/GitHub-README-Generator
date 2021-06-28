# GitHub README Generator

## Description

This is a strictly command-line node.js application for quickly generating README files. 
<br> Designed specifically for GitHub hosted projects.

Project starter code from [How to create a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/main/readme-guide.md) by [Xandromus](https://github.com/Xandromus). 

<b>Dependencies:</b>

* inquirer: command line user-prompts
* node-fetch: allow fetch for github api
* form-data: (In Testing) To allow file uploads 

***
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Future](#future)
***
## Installation
( Standard Node Project Installation )
1. Download the code from my [GitHub Repo](https://github.com/its-jefe/GitHub-README-Generator) and unzip.

2. Install dependencies using "npm install". (Make sure you are in the project directory)

3. Now you are ready to [USE](#usage)! 
***
## Usage

1. Run "node index.js" to begin using the application.

2. You will be taken through a series of prompts...
    * Answer them in as much detail as possible.
    * If a section does not apply to you, leave it blank <br>
    and the generator will not include that section

3. Voila! A readme file is generated in the distribution folder. 

Note: Use backslashes after numbers or bullets in lists to avoid auto formatting.

> ex: <br>
>"1\\. This is item one" <br> 
> <i> will appear <br>
> 1\. This is item one <br>
> <i>instead of <br>
> 1. this is item one (All scrunched in)

The demo video shows complications of not using backslashes but the README.md from the dist folder shows proper formatting. 
   
<b>Installation and Usage Demo Video:</b>
https://youtu.be/5GRvfMNTn4g


***
## Future 

- I would like to break down the intsallation, usage, and contributing prompts into steps.
> Until then I recommend using a backslash '\\' after numbers or bullets to stop the auto formatting of lists

- Add a form for uploading photos and test files. (Testing form-data package)

- Likely will add more badges.

***
## Contribute
If you come across any issues or have any ideas you would like to share...

Leave a comment and maybe I'll get around to it.

OR

Feel free to do it yourself and make a pull request. 🦦
