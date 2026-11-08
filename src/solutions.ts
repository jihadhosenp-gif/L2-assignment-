function multiplyValue(value :number, multiplier = 2) {
  return value * multiplier;
}

console.log(multiplyValue(10));   
console.log(multiplyValue(10, 5)); 
console.log(multiplyValue(7, 0));  



function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}

console.log(processInput("  TypeScript  ")); 
console.log(processInput(7));               
console.log(processInput(true));            
console.log(processInput(false));            



function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));      
console.log(formatCoordinate([22.35, 91.78, "Chittagong"])); 



function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    for (const item of array) {
      result.push(item);
    }
  }
  return result;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"])); 
console.log(concatenateArrays([1, 2], [3, 4], [5]));  

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name")); 
console.log(pluckValues(users, "id"));   


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());  
console.log(manager.getRoleInfo()); 


function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => resolve("Access Granted"), 1000);
  });
}


async function main() {
  console.log(await validateAgeAsync(20)); 

  try {
    await validateAgeAsync(15);
  } catch (error) {
    console.log(error); 
  }
}

main();