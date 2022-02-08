# Quiz App

[![Netlify Status](https://api.netlify.com/api/v1/badges/8a947e4a-03a9-47a5-97cf-da195b886b34/deploy-status)](https://app.netlify.com/sites/brauliofg-quizapp/deploys)
[View on Netlify 🔗](https://brauliofg-quizapp.netlify.app/)
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-2bfa1z)
[Data from Open Trivia DB API](https://opentdb.com/)

## How to Use

Click one of the links above to view the application. Upon loading the site, a form is shown with options regarding the types of questions the user will recieve. It is optional to change any of the form's initial data. There is a minimum of 1 question required and a maximum of 50 questions that can be requested at one time.
With the completed form, by clicking on the `Start Quiz` button, the quiz will load.
Once the quiz is loaded, answer all questions and click `Check Answers`. The score will be displayed at which point new questions can be obtained.
At any point when questions are displayed, the `Quiz App` logo can be clicked which will allow the user to change the quiz options to obtain new questions. The category and difficulty are displayed on the top right hand corner for the user's convenience.

## Description

Quiz App was created with the intention of learning ReactJS.
The following goals were achieved in the creation of this project.

- Handling user inputs to create an API request
- Obtaining and using data from an API
- Displaying results to the page by combining user inputs and data from an API
- Basic understanding of CSS and HTML
- Intermediate understanding of Javascript

### Known Bugs

- Some special characters are not displaying correctly (Example: "Ã©" is shown in place of "é"). This may be due to how Javascript decodes Base64 strings
- Once the quiz is submitted, the non-selected answers and incorrectly selected answers show through the header.
