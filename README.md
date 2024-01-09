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
