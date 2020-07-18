# Glasses - API Routes and Server Documentation

This is the documentation associated with the server implementation for the
[glasses](https://github.com/sharmavins23/Glasses) project. The server-side
implementation supports hot reloading of data, such that the programmer can
either make changes in development time or at runtime. Reloading of data is done
without any commands required.

The individual API routes are detailed below. If no parameters are specified,
no parameters are required.

## Get all pairs of glasses.

`GET /glasses/`

#### Response schema:

```json
{
    "assets": [
        {
            "name": "Name associated with asset",
            "default_scalar": "(Float) scaling value to resize asset",
            "asset_url": "(URL) .GLTF file link from poly.google.com"
        },
        ...
    ]
}
```

`200:` Asset data successfully retrieved.

## Add a pair of glasses.

`POST /glasses/add/`

#### Request schema:

```json
{
    "name": "Name associated with asset",
    "default_scalar": "(Float) scaling value to resize asset",
    "asset_url": "(URL) .GLTF file link from poly.google.com"
}
```

#### Response schema:

```json
{
    "message": "Data successfully appended."
}
```

`201:` Asset data successfully created.

## Flush the data.

`DELETE /glasses/flush/`

#### Response schema:

```json
{
    "message": "Data successfully deleted."
}
```

`200:` Asset data successfully removed.
