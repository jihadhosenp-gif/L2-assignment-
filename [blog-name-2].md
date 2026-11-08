any, unknown, never: The Three Types That Confused Me Most

For months, whenever TypeScript complained, I typed any and moved on. It felt like a cheat code. It took a nasty production bug to make me see that I had simply turned the compiler off.

How the hierarchy works

Picture the type system as a tree. At the top sits unknown: every value can be assigned to it. At the bottom sits never: it has no values at all, so it can be assigned to everything. And any? It doesn’t really belong in the tree. It opts out of checking entirely.


let a: any = "hello";
a.toFixed(2)

let u: unknown = "hello";
u.toFixed(2);'

if (typeof u === "string") {
  u.toUpperCase();
}


Both accept any value, but unknown makes you prove what you have before using it. With any, one careless value can spread through your code, because you can assign it to anything. It is why I now type JSON.parse results and catch errors as unknown.



never describes things that cannot happen: a function that always throws, or a branch that should be unreachable.


type Shape = "circle" | "square";

function area(s: Shape): number {
  switch (s) {
    case "circle": return 3.14;
    case "square": return 4;
    default:
      const _check: never = 
      return _check;
  }
}

Use unknown for data you can’t trust, never to catch the cases you forgot, and keep any as a last resort.