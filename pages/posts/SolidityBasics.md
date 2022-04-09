---
title: Solidity Basics
date: 2022/4/09
description: My notes from when I was doing crypto zombies
tag: Solidity Ethereum Development
author: Chad
---

# Solidity programming with crypto zombies

This blog will store the notes that I took while following the crypto zombies solidity tutorial. I hope that this blog will help me prepare for the Ethereum Dev Connect and help me remember basic concepts if I take a break from Ethereum.

# 1.2: Contracts

Solidity's code is encapsulated in contracts. A contract is the fundamental building block of Ethereum applications — all variables and functions belong to a contract.

## Version Pragma

All solidity source code should start with a "version pragma" — a declaration of the version of the Solidity compiler to us.

The snippet below states that it is for the compiler version between 0.5.0 (inclusive) and 0.6.0 (exclusive).

```
pragma solidity >=0.5.0 <0.6.0;
 contract HelloWorld { }
```

# 1.3: State Variables & Integers

State variables are permanently stored in contract storage. This means they're written to the Ethereum blockchain and stored there permanently. Think of them like writing to a DB.

## Unsigned Integers: uint

The `uint` data type is an unsigned integer, meaning **its value must be non-negative**. There's also an `int` data type for signed integers.

# 4: Math Operations

Math in Solidity is the same as in JS.
Addition: x + y
Subtraction: x - y,
Multiplication: x \* y
Division: x / y

# 5: Structs

Use `struct` for the more complex data type.

```
struct Person {
  uint age;
  string name;
}
```

Structs allow you to create more complicated data types that have multiple properties, like objects in JS.

Note that we just introduced a new type, `string`. Strings are used for arbitrary-length UTF-8 data.

```
 string greeting = "Hello world!"
```

# 1.6: Arrays

When you want a collection of something, you can use an `array`. There are two types of arrays in Solidity: fixed arrays and dynamic arrays:

```
// Array with a fixed length of 2 elements:
uint[2] fixedArray;
// another fixed Array, can contain 5 strings:
string[5] stringArray;
// a dynamic Array - has no fixed size, can keep growing:
uint[] dynamicArray;
```

You can also create an `array` of `structs` like `Person[] people; // dynamic array, we can keep adding to it`. Creating a dynamic array of structs like this can help store structured data in your contract, like a database.
Public Arrays
You can declare an array as public, and Solidity will automatically create a **getter** method. The syntax looks like: `Person[] public people;.
Other contracts would then be able to read from, but not write to, this array. So this is a helpful pattern for storing public data in your contract.

# 1.7: Function Declarations

A function declaration in Solidity looks like the following:

```
function eatHamburgers(string memory _name, uint _amount) public {
}
```

We're specifying the function visibility as public. We're also providing instructions about where the \_name variable should be stored- in `memory`. This is required for all reference types such as arrays, structs, mappings, and strings.

## What is a reference type, you ask?

Well, there are two ways in which you can pass an argument to a Solidity function:
**By value:** The Solidity compiler creates a new copy of the parameter's value and passes it to your function. This allows your function to modify the value without worrying that the value of the initial parameter gets changed.
**By reference:** Reference to the original variable. If your function changes the value of the variable it receives, the original variable's value gets changed.
Note: It's a convention (but not required) to start function parameter variable names with an underscore (\_) to differentiate them from global variables.
You would call this function like so:

```
eatHamburgers("vitalik", 100);
```

# 1.8 Working with structs and arrays

We can add items to arrays, as seen below.

```
Person satoshi = Person(172, "Satoshi"); //create the struct called satoshi,
people.push(satoshi);  Add that satoshi to the Array:
```

# 1.9: Private / Public Functions

n Solidity, functions are public by default. This means anyone (or any other contract) can call your contract's function and execute its code.

Mark your functions as private by default, and then only make public the functions you want to expose to the world.

Here is how to declare a private function:

```
uint[] numbers;

function _addToArray(uint _number) private {
  numbers.push(_number);
}
```

This means only other functions within our contract will be able to call this function and add to the numbers array.

It's the convention to start private function names with an underscore (\_).

# 1.10 Pure/View functions depending on what it returns

Let's look at function return values and function modifiers.
Return Values
Return a value from a function like this, same as JS.

```
string greeting = "What's up, dog?";

function sayHello() public returns (string memory) {
  return greeting;
}
```

In Solidity, the function declaration contains the **type of the return value** (in this case, string).

## Function modifiers

The above function doesn't change the state in Solidity — e.g. it doesn't change any values or write anything.
So this could be declared as a **view** function, meaning it's only viewing the data but not modifying it:

```
function sayHello() public view returns (string memory) {
```

Solidity also contains **pure** functions, which means you're not even accessing any data in the app. Consider the following:

```
function _multiply(uint a, uint b) private pure returns (uint) {
  return a * b;
}
```

This function doesn't even read from the app's state — its return value depends only on its function parameters.

**Note:** Solidity compiler is good about issuing warnings to let you know when you should use one of the pure or the view modifiers.

# 1.11: Keccak256 and Typecasting

Ethereum has the hash function keccak256 built-in, a version of SHA3. A hash function basically maps an input into a random 256-bit hexadecimal number.

Keccak256 expects a single parameter of type bytes. This means that we have to "pack" any parameters before calling keccak256:

```
//6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5
keccak256(abi.encodePacked("aaaab"));
//b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
keccak256(abi.encodePacked("aaaac"));
```

As you can see, the returned values are totally different despite only a 1 character change in the input.

## Typecasting

Sometimes you need to convert between data types. Take the following

```
uint8 a = 5;
uint b = 6;
// throws an error because a * b returns a uint, not uint8:
uint8 c = a * b;
// we have to typecast b as a uint8 to make it work:
uint8 c = a * uint8(b);
```

# 1.13: Events

Events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for specific events and take action when they happen.

```
// declare the event
event IntegersAdded(uint x, uint y, uint result);

function add(uint _x, uint _y) public returns (uint) {
  uint result = _x + _y;
  // fire an event to let the app know the function was called:
  emit IntegersAdded(_x, _y, result);
  return result;
}
```

Your app front-end could then listen for the event. A javascript implementation would look something like:

```
YourContract.IntegersAdded(function(error, result) {
  // do something with result
})
```
