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

## Service Deliverable

- Prerequisite: DONE. Simon Service deployed to your production environment
- Prerequisite: DONE. A link to your GitHub startup repository prominently displayed on your application's home page
- Prerequisite: DONE. Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
- Prerequisite: I accidentally implemented part of this deliverable in the previous phase. As such, I only had to add node express and service endpoints (which required about 6-8 commits worth of work).

Backend web service support and interaction
40% - Create an HTTP service using Node.js and Express
- DONE
10% - Frontend served up using Express static middleware
- DONE
10% - Your frontend calls third party service endpoints
- Chat functionality implemented via calls to OpenAI's chat completion services
20% - Your backend provides service endpoints
- GET and POST options for /api/trending to access and update popular questions asked in chat
20% - Your frontend calls your service endpoints
- Trending page displays results of GET request 
- Chat page makes POST requests to update 'trending' as the user asks questions

## Login Deliverable

- Prerequisite: DONE. Simon Login deployed to your production environment
- Prerequisite: DONE. A link to your GitHub startup repository prominently displayed on your application's home page
- Prerequisite: DONE. Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
- Prerequisite: DONE. At least 10 git commits spread consistently throughout the assignment period.

Application authentication and authorization
20% - Supports new user registration. DONE
20% - Supports existing user authentication. DONE
20% - Stores application data in MongoDB. DONE
- Trending questions and their counts are stored in MongoDB
20% - Stores and retrieves credentials in MongoDB. DONE
- Verified that credentials are stored and updated
20% - Restricts application functionality based upon authentication. DONE
- Other pages have limited functionality (no visible chat-box, trending information not displayed, etc) if the user is not authenticated. Endpoints require authorization to return desired information.

## WebSocket Deliverable

- Prerequisite: DONE. Simon WebSocket deployed to your production environment
- Prerequisite: DONE. A link to your GitHub startup repository prominently displayed on your application's home page
- Prerequisite: DONE. Notes in your startup Git repository README.md file documenting what you modified and added with this - deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
- Prerequisite: I had tried to set up my code for websocket implementation, so it went a little more quickly than most deliverables. It only required 8 commits worth of code, so I'm slightly short of this one. 

WebSocket support for data pushed from the backend
20% - Backend listens for WebSocket connection. DONE
- Successfully upgrades appropriate http requests and maintains connections
20% - Frontend makes WebSocket connection. DONE
- WebSocket configured from every page to actively track users on the site
30% - Data sent over WebSocket connection. DONE
- Message containing event type and list of active users received by each client every time someone joins/leaves the StrateGPT chat application. 
30% - WebSocket data displayed in the application interface. DONE
- Trending page displays active users (regardless of what they're doing on the application)

## React Deliverable

- Prerequisite: DONE. Simon React deployed to your production environment
- Prerequisite: DONE. A link to your GitHub startup repository prominently displayed on your application's home page
- Prerequisite: DONE. Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
- Prerequisite: DONE. At least 10 git commits spread consistently throughout the assignment period.
Application converted to use React
10% Bundled using Vite. DONE
30% Multiple functional react components. DONE
- App, Chat, Login, Trending, About, Unauthenticated, etc components all implemented
30% React router. DONE
- BrowserRouter and Router allow navigation between different components
30% React hooks. DONE
- Used to configure websockets on page load, fetch information from database, call third-party endpoints, etc.