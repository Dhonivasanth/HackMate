# Patchwork Backend

## Overview
Patchwork is a full-stack web application designed to facilitate smart team matching for hackathons and projects. The backend is built using Spring Boot, providing a robust and scalable server-side solution.

## Features
- Team management: Create, update, and retrieve teams.
- Smart matching: Match teams based on skills and project domains.

## Getting Started

### Prerequisites
- Java 11 or higher
- Maven
- An IDE (e.g., IntelliJ IDEA, Eclipse)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Patchwork.git
   ```
2. Navigate to the backend directory:
   ```
   cd Patchwork/backend
   ```
3. Install dependencies:
   ```
   mvn install
   ```

### Running the Application
To run the application, use the following command:
```
mvn spring-boot:run
```
The application will start on `http://localhost:8080`.

### API Endpoints
- `POST /teams`: Create a new team.
- `GET /teams`: Retrieve all teams.
- `GET /teams/{id}`: Retrieve a specific team by ID.
- `PUT /teams/{id}`: Update a specific team by ID.

## Testing
To run the tests, use the following command:
```
mvn test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.