# School Management API

## Overview

The School Management API is a Node.js and MongoDB-based application designed to manage school data. It provides endpoints for adding new schools and retrieving a list of schools sorted by proximity to a given location. The API ensures data integrity with built-in validation and uses MongoDB for efficient storage and retrieval.

## Features

- **Add School**: Allows users to add new schools with details such as name, address, latitude, and longitude.
- **List Schools**: Retrieves and sorts a list of all schools based on their proximity to the user’s location.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing school data.
- **Mongoose**: ODM library for MongoDB and schema modeling.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/school-management-api.git
   cd school-management-api
