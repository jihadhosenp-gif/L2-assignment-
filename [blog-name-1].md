Type vs Interface in TypeScript: How I Actually Decide

When I first picked up TypeScript, I spent far too long wondering whether to write type or interface. Here is the honest answer: for plain objects, either one works. But a few real differences are worth knowing before they surprise you.

The first is declaration merging. If you declare the same interface twice, TypeScript quietly combines them. This is handy when you need to add a field to a library’s type, like attaching a user to Express’s Request. A type alias will just throw a duplicate identifier error.


interface User { name: string }
interface User { age: number }

const u: User = { name: "Rafi", age: 24 }; 

The second is range. A type can name almost anything: unions, tuples, primitives. An interface only describes object shapes.


type Id = string | number;
type Point = [number, number]

The third is how you extend things. Interfaces use extends, which reads almost like plain English. Types use intersections with  and the result is similar.


interface Animal { name: string }
interface Dog extends Animal { bark(): void }

type Cat = Animal & { meow(): void };

My rule of thumb is simple. I reach for interface when describing objects, class contracts, or anything another developer might extend later. I switch to type the moment I need a union, a tuple, or a mapped type.