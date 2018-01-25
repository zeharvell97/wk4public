Prework Week 4 Assignment
===

this week we'll be pulling together all of the Javascript techniques you've learned thus far:

- variables
- arrays
- conditionals
- functions

These will be applied in an inventory system for a long term parking garage. This will be done in many steps so let's break it down into digestible chunks.

Base Mode
===

Global variables and pushing to an array
---

- create a variable named "parkedCars" and set it to an empty array
- create a ```const``` named "maxCars" and set it to 27

the ```parkCar``` function
---

- create a function called ```parkCar``` that will receive a car name.
- When called [ ex: ```parkCar( 'PT Cruiser' )``` ] that car name should be pushed into the array "parkedCars"
- this should happen only if there is room in the garage. Hint: check the length of the array to determine how many cars are in the garage. Check this against the "maxCars" const to check if there is room in the garage
- if the car was pushed into the array, return ```true```, if there was no room and the car wouldn't fit return ```false```
-

Hard Mode
===

the ```isParkedHere``` function
---

- write a function named ```isParkedHere``` that receives a car named
- when run [ex: ```isParkedHere( 'Ford Escape' )``` ], the function should return ```true``` if that car is parked in the garage
- return ```false``` if not found in the garage

Pro Mode
===

the ```takeForASpin``` function
---

- write a function named ```takeForASpin``` that receives a car name
- this function should use ```isParkedHere``` to determine if the car for which you are looking is in this garage
- if so, remove this car from the "parkedCars" array and return the car name (hint: look up ```splice``` for help on removing an item from an array)
- if not, return ```false```
