# Cargo Api

[![Build Status](https://travis-ci.com/MajAhd/cargo_api.svg?branch=master)](https://travis-ci.com/MajAhd/cargo_api)

*** 

## Requirements

- [NodeJs](https://nodejs.org/) >= 13
 
## How to start

- Run "npm install" to install all project dependencies from npm
- Run "gulp clean" to clean build folder
- Run "gulp build" to clean and build the project
- Run "gulp start" to clean, build and start the server

## Sequilize Scripts

- [sequelize Migration , Model , Seed Docs](https://sequelize.org/master/manual/migrations.html)
- Create Database cargo
- Run Migration : npx sequelize-cli db:migrate
- Run Seed : npx sequelize-cli db:seed:all

## scripts

- npm install
- npm run start
- npm run build
- npm run start-server

## Calculate Distance Between 2 Point

````
Haversine formula:    a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
c = 2 ⋅ atan2( √a, √(1−a) )
d = R ⋅ c
where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
note that angles need to be in radians to pass to trig functions!
````

````
SELECT `id`,`name`,
  ACOS( SIN( RADIANS( `latitude` ) ) * SIN( RADIANS( $fLat ) ) + COS( RADIANS( `latitude` ) ) *
  COS( RADIANS( $fLat )) * COS( RADIANS( `longitude` ) - RADIANS( $fLon )) ) * 6380 AS `distance`
FROM `stations`
WHERE
  ACOS( SIN( RADIANS( `latitude` ) ) * SIN( RADIANS( $fLat ) ) + COS( RADIANS( `latitude` ) ) * 
  COS( RADIANS( $fLat )) * COS( RADIANS( `longitude` ) - RADIANS( $fLon )) ) * 6380 < 10
ORDER BY `distance`
````

[read more](http://www.movable-type.co.uk/scripts/latlong.html)