# Project Specification: Birdle (Collaborative Birding Network)

## 1. Functional Specification

### Project Vision
The idea is to make Birdle a real-time, interactive web application that makes birding into a collaborative community experience. While the app uses the Swedish Artdatabanken Species Observation System (SOS) API as its foundational data source for bird sightings, the core focus is on user-to-user interaction and community-driven coordination. Users can not only track rare birds but actively organize field trips, communicate in real-time, and set up automated monitoring systems for specific geographic areas.

### Core Functions

* **Interactive Birding Map:** A dynamic map displaying recent sightings fetched from the SOS API, utilizing marker clustering for performance.
* **User-Generated Meetups:** Users can drop a pin on the map to create a "Meetup" (e.g., "Owl Spotting Tonight"). This stores the geolocation, timestamp, and creator data persistently.
* **Real-Time Expedition Chat:** Every active meetup will have a dedicated, real-time chat room attached to it. Users can coordinate, share updates, and debate species identifications.
* **Automated Search Alerts:** Users can draw a bounding box on the map, select a specific bird species (via Dyntaxa Taxon API), and save an "Alert." A backend process will monitor incoming SOS API data and trigger an email notification to the user if a matching observation occurs.
* **User Authentication & Profiles:** Users can log in, manage their active alerts, and view their history of created or joined meetups.

### Fulfillment of Course Requirements
* **User Data & Management:** The system heavily relies on users creating data (Meetups, Chats, Alert Configurations) which is stored persistently in a database.
* **No-Reload Interactivity:** The chat system and live map updates (when a new meetup is created) will use WebSockets to push data to clients instantly.
* **Complex System Integration:** The project mixes a third-party REST API (Artdatabanken) with a custom backend database, an email service, and a real-time WebSocket service.

---

## 2. Technological Specification

### Client Framework
* **Framework:** **React** (Bootstrapped with Vite for optimized build times).
* **State Management:** **Zustand** will handle global UI state (e.g., active map bounds, currently selected meetup, active user session).
* **Data Fetching & Caching:** **TanStack Query (React Query)** will be used to manage the heavy data fetching from the SOS API, handling caching and background refetching to keep the map snappy.
* **Map Rendering:** **React-Leaflet** will handle plotting geographic coordinates, bounding box selections for alerts, and interactive meetup pins.
* **Styling:** **Tailwind CSS** for clean component design.

### Server Framework / Backend Setup
The backend will utilize a serverless microservices architecture using the Microsoft Azure ecosystem.

* **Hosting & Routing:** **Azure Static Web Apps (ASWA)**. This will host the React frontend and automatically route API requests to the serverless backend. It will also handle **User Authentication**.
* **Backend API:** **Azure Functions (Node.js/TypeScript)**. Serverless functions will act as our REST API. They will handle secure communication with the Artdatabanken API (hiding the API keys), create/retrieve meetups, and process chat messages.
* **Database:** **Azure Cosmos DB (NoSQL)**. Used for persistent storage of user profiles, meetup details, chat histories, and alert configurations.
* **Real-Time Communication:** **Azure SignalR Service**. This fully managed WebSocket service will be integrated with Azure Functions to push live chat messages and new meetup pins to connected React clients instantly.
* **Background Processing & Email:** A Timer-triggered Azure Function (Cron job) will periodically check the SOS API against user "Search Alerts" in Cosmos DB. If a match is found, it will trigger an email via **SendGrid** (or Azure Communication Services).