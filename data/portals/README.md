# Thinking with Portals (async) - API Routes and Server Documentation

This is the documentation associated with the server implementation for the
[thinking with portals asynchronous](https://github.com/sharmavins23/ThinkingwithPortals_async)
project. The server-side implementation supports live reloading of data, and
can communicate with several devices across the internet. This project is meant
as a development test rather than a mock-up of a marketable product, and as such
the routes are (by design) not as specified as they should be for a product.

The individual API routes are detailed below. If no parameters are specified,
no parameters are required.

## Get the latest drawing.

`GET /portals/receive/`

#### Response schema:

```json
{
    "sender": "Name of data sender",
    "timeStamp": (Int) Unix epoch timestamp (ms),
    "lines": [
        {
            "points": [
                {
                    "x": (Float) x-magnitude of the vector,
                    "y": (Float) y-magnitude of the vector,
                    "z": (Float) z-magnitude of the vector
                },
                ...
            ]
        },
        ...
    ]
}
```

`200:` Asset data successfully retrieved.

## Send the drawing to the server.

`POST /portals/send/`

#### Request schema:

```json
{
    "sender": "Name of data sender",
    "lines": [
        {
            "points": [
                {
                    "x": (Float) x-magnitude of the vector,
                    "y": (Float) y-magnitude of the vector,
                    "z": (Float) z-magnitude of the vector
                },
                ...
            ]
        },
        ...
    ]
}
```

#### Response schema:

```json
{
    "message": "Data successfully sent."
}
```

`201:` Asset data successfully created.

## Flush the data.

`DELETE /portals/flush/`

#### Response schema:

```json
{
    "message": "Data successfully deleted."
}
```

`200:` Asset data successfully removed.
