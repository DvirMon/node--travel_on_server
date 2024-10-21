
# Travel-On Backend

This repository contains the backend for the **Travel-On** vacation website. The backend, named `travel-on-server`, handles user authentication and fetches vacation data from the database for users to like and schedule their vacations.

## Features

- **User Authentication:** Secure login and authentication using Firebase.
- **Vacation Data Fetching:** Retrieve vacation spots from the database.
- **Vacation Scheduling:** Allows users to add liked vacations to their personal schedule.

## Installation

To install and run the server, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DvirMon/travel-on-server.git
   ```

2. Navigate to the project directory:
   ```bash
   cd travel-on-server
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase configuration (see **Configuration** below).

5. Start the server:
   ```bash
   npm start
   ```

## Configuration

The project uses Firebase for authentication and data handling. To configure Firebase:

1. Set up a Firebase project [here](https://firebase.google.com/).
2. Create a `.env` file in the root of your project with the following environment variables:

   ```bash
   FIREBASE_API_KEY=your-api-key
   FIREBASE_PROJECT_ID=your-project-id
   ```

## Dependencies

The server relies on the following main packages:

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **firebase-admin**: Firebase SDK for connecting to Firebase services.

To install all dependencies, simply run `npm install`.

## Usage

Once the server is running, it listens on the defined port (default: 3000). The server will handle the following:

- Fetch vacation data from the database.
- Handle user authentication requests.

For now, the API documentation will be provided at a later time.

## Known Issues / Limitations

- The API documentation is currently not included but will be added in a future update.

## License

This project is licensed under the MIT License.
