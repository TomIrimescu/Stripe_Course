
## Stripe Payments In Practice

This repository contains the code of the [Stripe Payments In Practice Course](https://angular-university.io/course/stripe-course).

![Stripe Payments In Practice](https://angular-university.s3-us-west-1.amazonaws.com/course-images/stripe-course.jpg)


# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/stripe-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd stripe-course
    npm install

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

For enabling order fulfillment, we need a backend that Stripe can call to notify that a purchase was successful. We can start the backend with the following command:

    cd backend

    npm install

    npm run server

This will start a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)



# Important 

This repository has multiple branches, have a look at the beginning of each section to see the name of the branch.

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example 1-start.

We can checkout that particular remote branch, by using the following command:

      git checkout -b 1-start origin/1-start

It's also possible to download a ZIP file for a given branch, using the branch dropdown of this page on the top left, and then selecting the Clone or Download / Download as ZIP button.
