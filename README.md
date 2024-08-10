# Module 13 - eCommerce Back End 

- Applying the concepts from unit 13, I modified the provided code for this ecommerce web application with the following functionality:


### Database
- Followed best practices, such as renaming and loading my postgreSQL info inside the env file, using gitignore file to ignore my node_modules & env file.

- I initialized the schema.sql with the empty "ecommerce_db" file to allow sequelize to use the various model.js files to do the following...

### Models
- CATEGORY, PRODUCT, PRODUCT_TAG, TAG.js
    - Following the structure provided in the assignment, I modified each model with the necessary column ids and foreign keys in sequelize syntax to create the tables inside the "ecommerce_db".
- INDEX.js
    - In this file, I described the relationship between the various sequelize tables, their accompanying foreign keys & references to the appropriate model.
    - Relationships like "Product belongTo Category", "Category hasMany Product", "Tag belongsToMany Product"

### Routes
- CATEGORY, PRODUCT, TAG-routes.js
    - For each file, I modified the code with each of the following api calls:
        - router.get("/")
        - router.get("/:id")
        - router.post("/")
        - router.put("/:id")
        - router.delete("/:id)
    - Once complete, the functionality of each api calls will allow me to adjust data inside these api calls.

### Postman
- Using the application Postman while running nodemon on my server.js file, I was able to succesfully make GET, POST, PUT & DELETE calls under the following paths (see walkthrough vid below):
    - /Products
    - /Categories
    - /Tags


## Link to Walkthrough Vid

[Click here to see the walkthrough vid](https://drive.google.com/file/d/1GGvmPWcR90kszhxVLETty-r8dVYZ_HKc/view)

