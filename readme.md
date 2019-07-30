Tier 1 Week 4
===

This week we'll be pulling together all of the Javascript techniques you've learned thus far:

- variables
- arrays
- conditionals
- functions

These will be applied in an inventory system for a long term parking garage. This will be done in many steps so let's break it down into digestible chunks.

Required Features
===

Global variables and pushing to an array
---

- create a variable named "parkedCars" and set it to an empty array
- create a ```const``` named "maxCars" and set it to 7

the ```parkCar``` function
---

- create a function called ```parkCar``` that will receive a car name.
- When called [ ex: ```parkCar( 'PT Cruiser' )``` ] that car name should be pushed into the array "parkedCars"
- this should happen only if there is room in the garage. Hint: check the length of the array to determine how many cars are in the garage. Check this against the "maxCars" const to check if there is room in the garage
- if the car was pushed into the array, return ```true```, if there was no room and the car wouldn't fit return ```false```

```CSS``` 
---
Now let's practice some CSS! for this, we will go back to our index.html to start:

- Place the `<h1>` and `<p>` inside of a header and add a background-color to that header
- Create a stylesheet.css file and import it into the index.html file.
- Add a new div with a class name of "info". Inside that div add an `<h2> My name is YOUR NAME </h2>` Add a background-color and a text color of your choice.
- Add an image tag `<img>` and source an image of your main mode of transportation (you car, bus, scooter, bike, feet, etc)
- Add an `<h3>` that explains your mode of transportation. Add a background-color and a text color of your choice.


Stretch Goals
===

the ```isParkedHere``` function
---

- write a function named ```isParkedHere``` that receives a car named
- when run [ex: ```isParkedHere( 'Ford Escape' )``` ], the function should return ```true``` if that car is parked in the garage
- return ```false``` if not found in the garage

the ```takeForASpin``` function
---

- write a function named ```takeForASpin``` that receives a car name
- this function should use ```isParkedHere``` to determine if the car for which you are looking is in this garage
- if so, remove this car from the "parkedCars" array and return the car name (hint: look up ```splice``` for help on removing an item from an array)
- if not, return ```false```

**REMINDER:** Make sure to answer the Slack discussion question for this week!

The style should look something like this (image shown has a little more CSS - feel free to try some new things!)
<img src="./example.png" />