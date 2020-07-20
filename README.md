# Xora Fileserver

A small RESTful fileserver application built from the ground up to scale with
more projects in the future.

# Overview and Functionality

This is a lightweight server designed to provide various AR projects with assets
through HTTP GET and POST requests. It is a (potentially) infinitely ongoing
project, as the server can be repurposed for any number of other small projects.

The application is built on a Node server using Express, and routes for the
individual projects are segmented into individual files. Thus, to change the
data or routes for a project, one needs to only change the file in the routes
directory, as well as the data in the specific project folder
(`data/project name`). All data and implementation can be done separately and
agnostic of other changes or projects; As such, any file transfer is capable of
being implemented, and since the routes are indexed on server startup
automatically and dynamically, this server is designed from the ground up to
infinitely scale.

Each individual project will have a link to its Github code in the routes file.
The projects also have API documentations in `data/project name` folders.

# License TL;DR

This project is distributed under the MIT license. This is a paraphrasing of a
[short summary](https://tldrlegal.com/license/mit-license).

This license is a short, permissive software license. Basically, you can do
whatever you want with this software, as long as you include the original
copyright and license notice in any copy of this software/source.

## What you CAN do:

-   You may commercially use this project in any way, and profit off it or the
    code included in any way;
-   You may modify or make changes to this project in any way;
-   You may distribute this project, the compiled code, or its source in any
    way;
-   You may incorporate this work into something that has a more restrictive
    license in any way;
-   And you may use the work for private use.

## What you CANNOT do:

-   You may not hold me (the author) liable for anything that happens to this
    code as well as anything that this code accomplishes. The work is provided
    as-is.

## What you MUST do:

-   You must include the copyright notice in all copies or substantial uses of
    the work;
-   You must include the license notice in all copies or substantial uses of the
    work.

If you're feeling generous, give credit to me somewhere in your projects.
