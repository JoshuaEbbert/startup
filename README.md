# Test Prep StrateGPT

## Elevator Pitch
Text generation models have taken the world by storm with their myriad of potential applications; their potential is only as limited as our creativity in using them. Services like OpenAI have made their implementation far more realistic for the modern software developer (and startup company). The purpose of Test Prep StrateGPT is to provide a platform for a students to access state-of-the-art language learning models that have been specifically geared towards college readiness exams, such as the ACT and SAT. Students will be able to securely log in, chat in real time, and view trending questions.

## Design
![alt text](https://github.com/JoshuaEbbert/Test-Prep-StrateGPT/blob/b3b35e3d26846bb9c97475b7704dd5a439d635c6/Design.jpg?raw=true)

## Key Features
- Secure login over HTTPS
- Realtime chat with text generation models
- Ability to upload images within the conversation
- Access to models primed for conversation regarding college readiness exams
- Trending questions from all users displayed in realtime
- Top and/or currently active users displayed

## Technologies
- **HTML** - HTML backbone of site provides structure for application and navigation. Three pages that can be visited including login, chat, and trending
- **CSS** - Styling that will adapt to different device sizes, provide for a non-distracting user interface, include appropriate whitespace, demonstrate suitable coloring, and allow overall ease of use.
- **JavaScript** - Provides login and much of the chat functionality. Contributes to dynamic chat display, calls to backend endpoints for chat responses, allows image upload, etc.
- **Service** - Backend service with endpoints for:
  - login
  - llm-powered chat responses
  - analysis of images
- **Database/Login** - Create new users and store credentials. Application cannot be accessed without authentication. Additionally, store user information, top questions, and chat history in database. Trending questions page displays user questions stored in the database
- **WebSocket** - As active users interact with the chat functionality, broadcast the number of active users and their usernames in realtime.
- **React** - Application designed to use React framework

## HTML Deliverable

For this deliverable, I built out the structure of my application using HTML.

- HTML pages: Four HTML pages accessing the different functionalities of my web application
- Links: The navigation bar allows the user to move easily from page to page. The login page takes the user automatically to the chat.html page
- Text: Placeholder text for the various functionalities is found on each page. The main chat function has a partial conversation shown
- Images: Image placed on the about page
- DB/Login: Input box and submit option for login (will eventually verify login information against database of users). In addition, indicated where the chat history will be loaded from the database
- Websocket: Trending page shows realtime use of the StrateGPT web application, including current users and hot topics

## CSS Deliverable

For this deliverable, I styled my site using CSS and Bootstrap

- Header, footer, and main content body: Used CSS Flex to keep proper sizing relative to one another and filled with proper content such as will be used for the final website
- Navigation elements: Applied Bootstrap styling for clean header and nav bar
- Responsive to window resizing: Tested on wide range of window sizes
- Application elements: Dynamic placement via CSS Flex maintains proper spacing with different viewport sizes. Adding contrast and coloring for ease of use
- Application text content: Consistent fonts, clean colors, and contrast that all allow for easy reading, appropriate spacing, etc.
- Application images: Present on about page and as background image for login page

## JavaScript Deliverable

- Prerequisite: DONE. Simon JavaScript deployed to your production environment
- Prerequisite: DONE. A link to your GitHub startup repository prominently displayed on your application's home page
- Prerequisite: DONE. At least 10 git commits spread consistently throughout the assignment period (although I completed the project the day it was assigned, so it's not very spread out)

- JavaScript support for future login: Login page stores username in localStorage and displays username on the other pages
- JavaScript support for future database information: user-specific chat history stored in localStorage. Trending questions currently also stored in localStorage (and displayed on Trending page)
- JavaScript support for future Websocket: used SetInterval() to cycle out the 'active users' that are displayed on the trending page. 
- Javascript support for application's interaction logic: chat page constructs prompts based on the user's chat history and sends requests to OpenAI to generate an appropriate response. Chat messages dynamically displayed and formatted. 