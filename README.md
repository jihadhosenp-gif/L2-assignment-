TypeScript Assignment
Overview

This repository contains my solutions to a set of TypeScript practice problems, along with two short technical blog posts.

Problems solved (in src/solutions.ts):

#	Function  Class	Concept practiced
1	multiplyValue	Default parameters, handling 0 correctly
2	processInput	Union types and typeof narrowing
3	formatCoordinate	readonly tuples
4	concatenateArrays	Generics and rest parameters
5	Course  getPopularCourses	Interfaces and non-mutating filter
6	pluckValues	Generics with keyof constraint
7	Employee  Manager	Classes, inheritance, protected / private
8	validateAgeAsync	Promise<string>, setTimeout, rejecting with Error
Blog Posts
Type vs Interface in TypeScript: How I Actually Decide
any, unknown, never: The Three Types That Confused Me Most
How to Run
bash
npm install -D typescript
npx tsc        
node dist/solutions.js

To run in the browser, load the compiled file as a module and serve it over HTTP (for example with Live Server):

html
//<script type="module" src="./dist/solutions.js"></script>//