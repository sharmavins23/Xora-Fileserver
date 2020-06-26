# Xora Fileserver

A small RESTful fileserver application built from the ground up to scale with
more projects in the future.

## Overview and Functionality

The application is built on a node server on express.js, and segments API routes
and functionality into several separate project folders. As such, the return
values for any individual project can be changed completely without making
modifications to any other code.

Modules are loaded in dynamically based on a robust file structure, which
mirrors the HTTP request paths.
