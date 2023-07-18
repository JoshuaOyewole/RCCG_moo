# Dixre Multi-user App Documentation

This documentation provides instructions on setting up and running the
dixre application that includes signup, login, password reset
capabilities, and the ability to create and fetch posts. The application
is built using React JS / Typescript as the frontend and communicates with a backend
server built using NodeJs/Typescript, MongoDB, and ExpressJS.

## Getting Started

Before running the application locally, ensure that you have the
following prerequisites installed:

- Node.js (version 16 or higher)

- Git

- MongoDB Database

- Mongoose Compass

## Installation

To install and run the application locally, follow these
steps:

1. Clone the repository from GitHub:

```git clone https://github.com/JoshuaOyewole/dixre-assessment.git ```

2. Change to the project directory:

Navigate to the project directory using

```cd dixre-app```

3.  Install the required dependencies using npm or yarn:

```npm install```

or

```yarn installl```

## Configuration

Before running the application, you need to configure the backend server
URL. Follow these steps:

1.  Open the **.env** file in the **client/** directory.

-   Set the value of the **REACT_APP_API_URL** variable to the URL of
    the backend server.


    `REACT_APP_API_URL=http://localhost:5000/api`


-   Replace **http://localhost:5000/api** with the actual URL of your
    backend server.


2.  Open the **.env** file in the **server/** directory.

-   Set the following values for with the correct ones.

    `MONGO_URL=mongodb://127.0.0.1:27017/dixre`

    `JWT_SECRET = YOUR JWT SECRET CODE`

    `PORT= 5000`


    `AUTH_EMAIL: Your Email Adress (Preferable hotmail)`


    `AUTH_PASS: your Email Password`

## Running the Application

To run the application locally, execute the following command in the project directory:

1.  Navigate to the Client folder using ```cd client/``` and run 

    ```npm start``` or ```yarn dev```

This will start the development server, and the application will be
accessible at **http://localhost:5173** in your web browser.

2.  Navigate to the Client folder using ```cd server/``` and run 

    ```npm start``` or ```yarn dev```

This will start the Backend development server, and the application will be
accessible at **http://localhost:PORT**.

## Usage

Once the application is running, you can use it as follows:

1.  Open your web browser and navigate to **http://localhost:5173**.

2.  Login: You will be prompted to Login if you have a login credential (Phone Number and password) or proceed to Signup on your first   usage: Enter your login credentials after signing up and access the application.

3.  Sign up: Provide the required details, such as Firstname, Lastname, Phone   Number, Gender, email, and password, to register.

4.  Password Reset: If you forget your password, click on the \"Forgot
    password?\" link on the login page. Follow the instructions to reset
    your password.

5.  Create Posts: Once logged in, you can create new posts by clicking
    on the \"Create Post\" button. Provide the required information,
    such as Photo Description and Photos (Min of 2 and Maximum of 6), and submit the form.

6.  Fetch Posts: The application automatically fetches a list of posts
    from the backend server. The posts are displayed on the main page in
    batches of 10, sorted by the latest and loaded as your keep scrolling (Infinite Scrolling). You can refresh posts by clicking on the refresh post button

## Troubleshooting

If you encounter any issues while running the application, please try
the following steps:

1.  Ensure that all the dependencies are installed correctly by running
    **npm install** or **yarn install** again.

2.  Double-check the configuration in the **.env** file, especially the
    **REACT_APP_API_URL** variable, to ensure it points to the correct
    backend server.

3.  Make sure the backend server is running and accessible at the
    specified URL.

4.  Check the console output in your browser\'s developer tools for any
    error messages or warnings.

## Screenshot

### Mobile View


**Conclusion**

Congratulations! You have successfully set up and run the dixre
application locally. You can now explore its signup, login, password
reset capabilities, and the ability to create and fetch posts. Enjoy
using the application!
