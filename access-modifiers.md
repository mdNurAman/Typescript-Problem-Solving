Access Modifiers in Object-Oriented Programming (OOP)

There are usually two programming paradigm. One is functional programming, another one is object oriented programming. Both have some pros,and cons. Today i will try to give you some basic idea abou the different types of access modifiers in Object Oriendted Programming. Though i will type the coding example on typescript but the idea is same for all other programming languages.


A class may contain data and methods in their characteristics. Data is the most important thing in a class. Data needs confidentiality. The access modifiers provide the confeditianlity to the classes data. There are 4 type of access modifiers.
  i. Public
  ii. Private
  iii. Protected
  iv. Readonly
Most programming language contain first 3. Lets deep dive into them one by one.

i. Public: This is most generic one. This type of access modifiers doesnt provide any restriction about the data access. You can access the data from inside or outside the 
class Employee {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const employee = new Employee("Alice");
console.log(employee.name);Alice
employee.name = "Bob";Allowed
Important Note: In TypeScript, properties and methods are public by default. Therefore, explicitly writing the public keyword is optional.

ii. Private: This type of access modifiers have hard restrictions. You can use the data only within the class. Outside the class, you cannot access the data if the type is private. If you want to get the data or set the data then Class has some methods to do it. Like getter and setter method. #get and #set keyword do the work in typescript.
  class Employee {
  private salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}
const employee = new Employee(50000);
console.log(employee.getSalary()); 50000
Error: Property 'salary' is private.
console.log(employee.salary);

iii. Protected: This type of access modifier is same as private modifier but you can access the data in the inherited classes.
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

iv. Readonly: This is typescript special. If your intension is about just to read the value and not to let the user to modify the value then you can use the readonly keyword.
class User {
  readonly id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const user = new User(101, "Alice");
console.log(user.id);101
user.name = "Bob";Allowed
user.id = 102;
Error: Cannot assign to 'id'
because it is a read-only property.

Access modifiers is an important concept in OOP beacause it helps us manages how data and methods are accessed and modified.Understanding these concepts will help you write cleaner,safer, and more maintainable code.

