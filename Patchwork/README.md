# Patchwork

Patchwork is a full-stack web application designed to facilitate smart team matching for hackathons and projects. The application leverages Spring Boot for the backend and React with Vite for the frontend, providing a seamless experience for users looking to collaborate on innovative projects.

## Features

- **Smart Team Matching**: Users can find and join teams based on their skills and project interests.
- **Team Management**: Create, update, and manage teams with ease.
- **User Profiles**: Users can create profiles that showcase their skills and interests, enhancing the matching process.

## Project Structure

The project is organized into two main parts: the backend and the frontend.

### Backend

The backend is built using Spring Boot and is responsible for handling business logic, data management, and API endpoints.

- **Main Application**: `backend/src/main/java/com/patchwork/PatchworkApplication.java`
- **Controllers**: `backend/src/main/java/com/patchwork/controller/TeamController.java`
- **Services**: `backend/src/main/java/com/patchwork/service/TeamService.java`
- **Models**: `backend/src/main/java/com/patchwork/model/Team.java`
- **Configuration**: `backend/src/main/resources/application.properties`
- **Tests**: `backend/src/test/java/com/patchwork/PatchworkApplicationTests.java`
- **Dependencies**: `backend/pom.xml`

### Frontend

The frontend is developed using React and Vite, providing a dynamic and responsive user interface.

- **Entry Point**: `frontend/src/main.tsx`
- **Main Component**: `frontend/src/App.tsx`
- **Team Matcher Component**: `frontend/src/components/TeamMatcher.tsx`
- **Home Page**: `frontend/src/pages/Home.tsx`
- **Type Definitions**: `frontend/src/types/index.ts`
- **HTML Template**: `frontend/public/index.html`
- **Configuration**: `frontend/package.json`, `frontend/tsconfig.json`, `frontend/vite.config.ts`

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Run `mvn clean install` to build the project.
3. Start the application using `mvn spring-boot:run`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies with `npm install`.
3. Start the development server using `npm run dev`.

## Architecture Overview

The Patchwork application follows a modular architecture, separating concerns between the frontend and backend. The backend serves as a RESTful API, while the frontend consumes these APIs to provide a rich user experience.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to enhance the functionality and performance of the Patchwork application.