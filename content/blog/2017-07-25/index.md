---
title: "Introduction to AccessMap"
date: "2017/07/25"
category: "accessmap"
cover: "/logos/logo-1024.png"
author: Nick Bolten
tags:
    - accessmap
    - tech
---
# First post

## What AccessMap is about

AccessMap tries to serve an informational requirement that often goes unmet:
if a pedestrian wants to go from point A to point B, what path should I take
so I can avoid things like:
- Steep hills
- High curbs (for a wheelchair user)
- Walking on the street (preferring the sidewalk)

The current version of AccessMap is based on data from
[data.seattle.gov](https://data.seattle.gov).

## AccessMap going forward

While building off of open data sources is a great way to get something like
AccessMap running quickly, it poses some challenges for important questions:
- What if some of the data is incorrect? How do we fix it and who do we tell?
- How does the data relate to other features on the ground? We need to combine
data for sidewalks, streets, curb ramps, telephone polls, etc, to make a good
map, but these are often from different departments in different formats.
- How do we keep the data free and open?
- How do we make the data available for others?

These are problems that we would need to address ourselves, with custom-written
software, if we wanted to make AccessMap available and updatable by the
community.

Luckily, the [OpenStreetMap](https://openstreetmap.org) project handles most of
these issues already! OpenStreetMap is often described as the "Wikipedia of
maps": anyone can log in and edit data, and data integrity is kept in check by
committed authors who scan for errors, and data consumers that require
high-quality information and notice issues. One can immediately see how this
addresses issues of data provenance: the data is free and open by default,
available to others in a centralized database, changes are tracked
systematically, and pushing updates is baked-in.

In addition, OpenStreetMap was designed with an extremely flexible and
inherently relational data schema, so the issue of combining separate data
sources is massively mitigated: the data for streets, buildings, sidewalks,
etc is all in the same layer and connected together.

Therefore, AccessMap will eventually switch to using OpenStreetMap data. The
only real barrier is a lack of coverage for pedestrian information: sidewalks
and many other features relevant to pedestrians are often missing from
OpenStreetMap, so we need to map them. This is where we draw from our sister
project, [OpenSidewalks](https://www.opensidewalks.com).

The OpenSidewalks project is all about adding pedestrian data to OpenStreetMap:
it hosts mapathons where volunteers add data, and helps define the schema used
so that we can all have consistent, detailed pedestrian information.

## Initializing pedestrian data in OSM from open data sources

Cities have a lot of pedestrian ways that are missing in OSM, but are tracked
by local authorities. Part of the OpenSidewalks project is to make the process
of importing that data as simple as:

1. Running some code:

```bash
   os-stage seattle inputdata/ staging-data/
```

2. Hosting a mapathon: ask volunteers to go to a URL and verify the information
piece-by-piece, with on-the-ground verification powered by imagery from sources
like [Mapillary](https://www.mapillary.com).
