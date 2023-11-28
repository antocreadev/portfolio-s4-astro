---
title: Portfolio with PHP (MVC)
heroImg: "SAE203.webp"
layout : "../../layouts/project.layout.astro"
date : 2022
description : "This portfolio was created after 6 months of learning in the Bachelor's degree program in Multimedia and Internet Technologies (BUT MMI). It was built using HTML5, CSS3, and a few lines of Javascript. The purpose of this portfolio was to assess the learning progress and address the tasks assigned during the first semester."
competence : "FrontEnd, BackEnd, Graphics"

---
# Portfolio Website Development - BUT MMI - Frontend & Backend

## I. Introduction

The objective is to develop a portfolio website with an administration interface for configuring, modifying, and deleting elements. The portfolio should be populated with multimedia content representing projects stored in a database. This report outlines the thought process, analyses, and solutions used to accomplish the task.

## II. Reflections, Analyses, and Solutions

### II.1 Database Modeling - Conceptual Data Model

To make the portfolio dynamic and editable, a database is necessary. Before implementation, considerations include defining the database's purpose and role. The database should store content, including project descriptions, site images, user information, and contact form data.

The entity-relationship model was derived from the identified entities and their associations. Notable relationships include localizations containing images, images/texts linked to multiple projects, and projects composed of multiple localizations.

![Entity-Relationship Model](/img/sae203/image1.png)

The relational model is derived from the entity-relationship model, eliminating unnecessary associations.

![Relational Model](/img/sae203/image3.png)

### II.2 Database Implementation Using a DBMS Server

MySQL was chosen as the relational database management system due to its popularity, open-source nature, and developer-friendly features. The database was implemented using MySQL Workbench, and data population was achieved through PHP and HTML forms connected to the MySQL database.

![MySQL Workbench](/img/sae203/image4.png)

### II.3 Development of MVC Design Pattern Scripts

The Model-View-Controller (MVC) architectural pattern is implemented for the website. MVC consists of three components: Model, View, and Controller.

![MVC Architecture](/img/sae203/image5.png)

The website follows this architecture:

![Website Architecture](/img/sae203/image6.png)

- **Controller:** Handles HTTP requests, retrieves data from the model, and passes it to the view.
- **Model:** Retrieves data from the database using SQL queries.
- **View:** Generates HTML pages with data from the model.

The MVC pattern offers advantages like code reusability, easier maintenance, flexibility in development, and ease of unit testing.

![MVC Example](/img/sae203/image7.png)

The model retrieves data from the database using SQL queries.

![Model Example](/img/sae203/image8.png)

The view generates HTML pages with data from the model.

![View Example](/img/sae203/image9.png)

The MVC pattern enhances code organization, facilitating future updates and maintenance.

### II.4 Backoffice Development

To make the portfolio dynamic, a back office was developed, accessible only to the admin with authentication. The back office includes site data and forms for site modification. The forms were created using HTML and JavaScript, linked to the database with SQL queries for modifications, additions, and deletions.

![Back Office Forms](/img/sae203/image10.png)

Subsequently, additional features were implemented in the back office, such as displaying the number of registered users and total messages. A button was added to show/hide messages received via the contact form, using SQL queries to fetch and display the data.

**Back Office URL and Credentials:** [See Annex](#)

### II.5 User Account Management System

A user account management system was implemented for web security and session management. The system includes login and registration pages. The login page verifies admin credentials, checks if the email exists in the database, and validates the password.

**Login Page Features:**
- Verification of admin credentials to access the back office.
- Validation of email existence in the database.
- Password verification and appropriate alerts.

**Registration Page Features:**
- HTML form for user registration.
- Data submission to the database.

**System for Future Development:**
The login and registration features are currently hidden on the site, accessible via specific routes. The system is designed for future scalability, including the implementation of a CMS.

### II.6 Presence of Multimedia Elements

Multimedia elements such as animations, static images, and GIFs appear on the site, all sourced from the database via the back office. Files are uploaded securely to the server using PHP, with various checks for file integrity and security.

![Multimedia Elements](/img/sae203/image15.png)

### II.7 Local or Online Hosting

The site is hosted online using Ionos as the hosting provider. Ionos provides pre-configured servers with PHP, MySQL, and phpMyAdmin. Filezilla was used for file transfer, and the site is now accessible at [anthonymenghi.com](https://anthonymenghi.com).

![Hosting Confirmation](/img/sae203/image16.png)

## III. Portfolio Development

### III.1 Graphic Identity

The portfolio serves as a professional representation, prompting a complete redesign for a more mature and creative image. The entrance animation, modern typography, and impactful homepage were carefully crafted. The slogan, "Linking art and computer science to make the web more beautiful and intelligent," is highlighted with relevant GIFs, and interactive elements, such as a cursor effect, were added to convey creativity and innovation.

![Entrance Animation](/img/sae205/image2.png)

### III.2 Information Architecture

The information is structured into sections with a clear navigation bar. Projects are categorized, and hovering reveals project details. Competence is represented by an animated atom with language logos. The "About" section includes a brief introduction, ongoing studies, and interests. The contact section features a database-stored contact form.

![Project Details](/img/sae205/image5.png)

### III.3 Additional Documents

In addition to the online portfolio, essential documents like CV and cover letter were created. The CV maintains a classic and professional style with a blue color scheme. It is organized into sections covering experience, education, languages, passions, contact information, and skills. A minimalistic approach was taken for a clean and effective presentation.

![CV](/img/sae205/image9.png)

The cover letter, targeting a first professional experience, aims to spark interest by highlighting academic projects accessible on the website, emphasizing mastered tools, and expressing enthusiasm for the specific company.

*The portfolio is live at [anthonymenghi.com](https://anthonymenghi.com/)*

This portfolio, the result of a year of learning in the University Institute of Technology (UIT) in Multimedia and Internet Professions (MMI), represents the evolution of projects and skills acquired throughout the year. The creation process was guided by thoughtful considerations on graphic design principles, information architecture, as well as the development of complementary documents such as the resume and cover letter. The portfolio creation journey encompasses database modeling, implementation using innovative methods, back-office development, user management, integration of multimedia elements, and ultimately, online hosting.
