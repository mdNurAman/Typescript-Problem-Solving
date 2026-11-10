function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}
type Input = string | number | boolean;
function processInput(value: Input): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}
type Coordinate = readonly [latitude: number, longitude: number, locationName: string];
function formatCoordinate(value: Coordinate): string {
  return `"Location: ${value[2]} (${value[0]}, ${value[1]})"`;
}
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const res: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    res.push(...arrays[i]);
  }
  return res;
}
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const res: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].isPublished && courses[i].students >= minStudents) {
      res.push(courses[i]);
    }
  }
  return res;
}
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const res: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    res.push(items[i][key]);
  }
  return res;
}
class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseslary: number) {
    this.name = name;
    this.baseSalary = baseslary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;
  constructor(name: string, baseslary: number, department: string) {
    super(name, baseslary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  } else {
    return new Promise((_, reject) => {
      reject(new Error("Access Denied: Must be 18 or older"));
    });
  }
}