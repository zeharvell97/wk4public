# Week 4 Classroom Builder Application

You've practiced your new skills with Arrays, Objects, Constructors, and Loops. Now it's time to put them all together!

## Prime Seating App

You will be building an application that creates and assigns out seating for each of Prime's classrooms.

Extend the code in `bringItTogether.js` inside your `assignments` folder. You should consider using some of the code you wrote in earlier assignments from this week as they will contain useful functionality.

## Instructions

Look at the given code. You have been given an array of arrays. Each inner array describes a classroom.

* In the first position is the **total number of seats** needed.
* The next shows how many **rolling office chairs** the room needs.
* Third is the **number of foam cubes** the room requires.
* Last is the **color** of fabric the seats should have.

## Output

Your job is to transform this starting data into Objects and `console.log` the object out, one for each classroom. Each of these new objects will contain a number of properties:

* `capacity` : number of seats in the room
* `rollingChairs` : contains an array of objects describing a rolling office chair. See below for details about these chair objects.
* `cubes` : contains an array of objects describing a foam cube. See below for details about these cube objects.

Something like this:

```
var room = {
  capacity: 20,
  rollingChairs: [
    {RollingChair object}, {RollingChar object}, ...
  ],
  cubes: [
    {Cube object}, {Cube object}, ...
  ]
};
```

### Object Types

##### `RollingChair` objects have two properties:
  - `color` : a String of the color of the chair fabric.
  - `type` : a String of the type 'rolling'.

##### `Cube` objects have two properties:
  -  `length` : a Number representing the inches of each side of the cube. Assume the length of the cube is 24 'units'.
  - `volume` : a method that returns the physical volume of the cube, which is the length to the power of three. You might consider using [`Math.pow`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) or just multiply the length by itself three times.


## Where To Start

You will need to loop through the array of rooms and for each room array, convert the information into an object with various pieces of data inside it. You should use the constructors provided to create your chair, cube, and room objects. 

You will notice that these constructors are documented with a special comment syntax called a `docstring`. It looks like this:

```
/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Array} array - a single room array of data
**/
```

Don't worry about this too much. First thing to know is that it is a comment block, meaning that it is not executable code. Then you will see the description of what the constructor does. Finally, you will see a list of parameters, what they represent, and their types. Use this as additional information to help you understand what code you need to write. 