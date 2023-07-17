**Dixre Multi-user App Documentation**

This documentation provides instructions on setting up and running a
multi-users application that includes signup, login, password reset
capabilities, and the ability to create and fetch posts. The application
is built using React JS / Typescript as the frontend and communicates with a backend
server built using NodeJs/Typescript, MongoDB, and ExpressJS.

**Prerequisites**

Before running the application locally, ensure that you have the
following prerequisites installed:

-   Node.js (version 16 or higher)

-   Git

    **Installation**

To install and run the  application locally, follow these
steps:

1.  Clone the repository from GitHub:

bashCopy code

git clone \<repository_url\>

2.  Change to the project directory:

bashCopy code

cd dixre-app

3.  Install the required dependencies using npm or yarn:

bashCopy code

npm install

or

bashCopy code

yarn install

**Configuration**

Before running the application, you need to configure the backend server
URL. Follow these steps:

1.  Open the **.env** file in the project root directory.

2.  Set the value of the **REACT_APP_API_URL** variable to the URL of
    the backend server.

bashCopy code

REACT_APP_API_URL=http://localhost:8000/api

Replace **http://localhost:8000/api** with the actual URL of your
backend server.

**Running the Application**

To run the multi-users application locally, execute the following
command in the project directory:

bashCopy code

npm start

This will start the development server, and the application will be
accessible at **http://localhost:3000** in your web browser.

**Usage**

Once the application is running, you can use it as follows:

1.  Open your web browser and navigate to **http://localhost:3000**.

2.  Signup: Click on the \"Signup\" link to create a new user account.
    Provide the required details, such as username, email, and password,
    to register.

3.  Login: After signing up, click on the \"Login\" link to enter your
    credentials and access the application.

4.  Password Reset: If you forget your password, click on the \"Forgot
    password?\" link on the login page. Follow the instructions to reset
    your password.

5.  Create Posts: Once logged in, you can create new posts by clicking
    on the \"Create Post\" button. Provide the required information,
    such as title and content, and submit the form.

6.  Fetch Posts: The application automatically fetches a list of posts
    from the backend server. The posts are displayed on the main page in
    batches of 10, sorted by the latest. Use the navigation buttons to
    view older or newer posts.

    **Troubleshooting**

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


**Conclusion**

Congratulations! You have successfully set up and run the dixre
application locally. You can now explore its signup, login, password
reset capabilities, and the ability to create and fetch posts. Enjoy
using the application!


