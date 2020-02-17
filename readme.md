# Tier 1 Week 4

This week we'll be pulling together all of the Javascript techniques you've learned thus far:

- variables
- arrays
- conditionals
- functions

These will be applied in an inventory system for a long term parking garage. This will be done in many steps so let's break it down into digestible chunks.

## Required Features

### Global variables and pushing to an array

- create a variable named "parkedCars" and set it to an empty array
- create a `const` named "maxCars" and set it to 7

### the `parkCar` function

- create a function called `parkCar` that will receive a car name.
- When called [ ex: `parkCar('PT Cruiser')` ] that car name should be pushed into the array "parkedCars"
- this should happen only if there is room in the garage. Hint: check the length of the array to determine how many cars are in the garage. Check this against the "maxCars" const to check if there is room in the garage
- if the car was pushed into the array, return `true`, if there was no room and the car wouldn't fit return `false`

__IMPORTANT:__ Make sure to test your functions in the JavaScript file! 

Use code like this to verify that you get the results that you expect:
```
console.log(`Before parking car array is ${parkedCars}`);
console.log('Parking car 1 (expect true)', parkCar('Toyota'));
console.log(`After parking car array is ${parkedCars}`);
// ... park more cars ...
console.log('Parking car 8 (expect false)', parkCar('Mini'));
console.log(`After parking car array is ${parkedCars}. (Should not contain Mini.)`);
```

### Styling with `CSS` 

Now let's practice some CSS! for this, we will go back to our index.html to start:

- Place the `<h1>` and `<p>` inside of a header and add a background-color to that header
- Create a stylesheet.css file and import it into the index.html file.
- Add a new div with a class name of "info". Inside that div add an `<h2> My name is YOUR NAME </h2>` Add a background-color and a text color of your choice.
- Add an image tag `<img>` and source an image of your main mode of transportation (you car, bus, scooter, bike, feet, etc)
- Add an `<h3>` that explains your mode of transportation. Add a background-color and a text color of your choice.

**REMINDER:** Make sure to answer the Slack discussion question for this week!

The style should look something like this (image shown has a little more CSS - feel free to try some new things!)
<img src="./example.png" />


## Stretch Goals

### the `isParkedHere` function

- write a function named `isParkedHere` that receives a car name.
- when run [ ex: `isParkedHere('Ford Escape')` ], the function should return either:
  - the index of the car in the array, if that car is parked in the garage
  - OR `-1` if the car is not found 

### the `takeForASpin` function

- write a function named `takeForASpin` that receives a car name.
- this function should use `isParkedHere` to determine if the car is in the garage and where it is found
- then the function should either:
  - remove this car from the "parkedCars" array and return the car name (hint: look up `splice` for help on removing an item from an array)
  - OR return `null` if the car is not found 

> Note: `null` is a special value in JavaScript that indicates that *no value*. If you (as a programmer) want to indicate a function is returning no value or that a variable has no value set, use `null` not `undefined`. Contrast this with `undefined` which is the default value of a variable that has not been set. 


### Add Color

Add color to your cars! Update the `parkCar` function to accept a color parameter, and then update the `takeForASpin` function to allow the color to be used to search for a car. 

For Example:

- If we add a Red PT Cruiser to our array with `parkCar('PT Cruiser', 'Red')`
- We should be able to run `takeForASpin('Red')` or `takeForASpin('PT Cruiser')` and find the car. If it is not there, we should still get `false`.

How would you go about storing additional information for this car? What if you wanted to store year, make, model, VIN, owner, and a bunch of other information?  (Hint: research objects)
