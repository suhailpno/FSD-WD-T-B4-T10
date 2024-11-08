# Recipes App

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)

## Project Overview

This application allows users to create, read, update, and delete recipes. It is a full-stack project that interacts with MongoDB to store and retrieve data through a RESTful API.

## Technologies Used

- Node.js
- Express.js
- MongoDB and Mongoose
- Postman (for API documentation and testing)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/suhailpno/FSD-WD-T-B4-T10.git
   cd FSD-WD-T-B4-T10
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/recipes-app
   ```

4. **Run the Application**
   ```bash
   npm start
   ```

## API Endpoints

- `GET /recipes`: Retrieve all recipes
         http://localhost:5000/recipes

- `GET /recipes/:id`: Retrieve a specific recipe by ID
         http://localhost:5000/recipes/672dcd3a3c269680c226b849

- `POST /recipes`: Create a new recipe
         POST
         Create Recipe
         http://localhost:5000/recipes
        
         {
           "name": "Spaghetti Bolognese",
           "ingredients": ["spaghetti", "ground beef", "tomato sauce"],
           "instructions": "Boil spaghetti, cook ground beef, mix with tomato sauce, serve."
         }

- `PUT /recipes/:id`: Update an existing recipe by ID
         http://localhost:5000/recipes/672dcd3a3c269680c226b849
         
         {
            "name": "Updated Spaghetti",
            "ingredients": ["spaghetti", "beef", "new tomato sauce"],
            "instructions": "Cook the spaghetti with the updated sauce."
         }

- `DELETE /recipes/:id`: Delete a recipe by ID
         http://localhost:5000/recipes/672dce1b3c269680c226b84d

## Testing with Postman

To test the API endpoints, you can use Postman. Here are the steps to follow:

1. **Install Postman**

A CRUD application for managing recipes using Node.js, Express.js, and Mongoose. This application follows the MVC (Model-View-Controller) pattern and is documented using Postman.

## Configuration

- Environment Variables
- Database Connection

## Usage

- Creating a Recipe
- Retrieving Recipes
- Updating a Recipe
- Deleting a Recipe
