# Xora Fileserver

A small RESTful fileserver application built from the ground up to scale with
more projects in the future.

## Overview and Functionality

The application is built on a node server on express.js, and routes for the
individual projects are segmented into individual files. Thus, to change the
data or routes for a project, one needs to only change the file in the routes
directory, as well as the data in the specific project. All data and
implementation can be done separately and agnostic of other changes or projects.

Each individual project will have a link to its Github code in the routes file.
