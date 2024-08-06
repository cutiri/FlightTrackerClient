# FlightTrackerClient

`FlightTrackerClient` is a JavaScript-based frontend application that interfaces with the `FlightTrackerServer` backend to provide a comprehensive and interactive flight tracking experience. This client displays a world map showing the real-time position and direction of every flight globally. Users can click on an airplane to view detailed flight information including departure and arrival airports, flight times, airline, flight number, current altitude, speed, heading, and a real image of the selected airplane.

## Overview

The FlightTrackerClient project is a dynamic web application built with JavaScript that visualizes global flight data on an interactive world map. It queries the backend API provided by [FlightTrackerServer](https://github.com/cutiri/FlightTrackerServer) to fetch and display real-time flight information and offers users detailed insights into each flight.

## Features

- **Interactive World Map**: Displays a real-time map with the positions and directions of all flights worldwide.
- **Flight Details**: Click on any airplane to view detailed information including:
  - Departure and arrival airports and times
  - Airline and flight number
  - Current altitude, speed, and heading
  - A real picture of the selected airplane
- **Real-Time Updates**: Continuously updates flight positions and information from the backend server.

## Installation

### Prerequisites

1. **Web Browser**: A modern web browser (Chrome, Firefox, Edge, etc.).
2. **FlightTrackerServer**: Ensure that the [FlightTrackerServer](https://github.com/cutiri/FlightTrackerServer) backend is running and accessible.

### Steps

1. **Clone the Repository**:
   - Clone the FlightTrackerClient repository using Git:
     ```bash
     git clone https://github.com/your-username/FlightTrackerClient.git
     ```
   - Navigate to the project directory:
     ```bash
     cd FlightTrackerClient
     ```

2. **Install Dependencies**:
   - Install the required packages using npm:
     ```bash
     npm install
     ```

3. **Configure API Endpoint**:
   - Ensure that the client is configured to point to the correct `FlightTrackerServer` API endpoint. Update the API URL in the configuration file if necessary.

4. **Start the Application**:
   - Run the following command to start the development server:
     ```bash
     npm start
     ```
   - Open your web browser and navigate to `http://localhost:3000` (or the port specified) to view the application.

## Usage

- **Viewing Flights**: The world map will automatically display all flights in real-time. 
- **Interacting with the Map**: Click on any airplane icon to see detailed information about the flight.
- **Exploring Flight Details**: Detailed flight data will be shown in a popup or side panel, depending on the design.

## License

The FlightTrackerClient project is licensed under the [MIT License](#). See the LICENSE file for more details.

## Contact

For questions or support, please contact us at [avillasante@hotmail.com](mailto:avillasante@hotmail.com).

## Authors

- Joseph Noble
- Angel Villasante
