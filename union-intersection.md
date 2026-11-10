Combining Union (|) and Intersection (&) Types in TypeScript

In TypeScript, we can combine Union and Intersection types to make our code more flexible and reusable.

Let's take a practical example. Suppose we have two types of users: Admin and Customer. Both have some common properties, but Admin has some extra permissions.
type User = {
  name: string;
  email: string;
};
type Admin = User & {
  role: "admin";
  permissions: string[];
};
type Customer = User & {
  role: "customer";
  purchaseCount: number;
};
type Account = Admin | Customer;


Here, we used Intersection (`&`) to combine common User properties with Admin and Customer specific properties.

On the other hand, Union (`|`) allows the Account type to accept either an Admin or a Customer.

function showAccount(account: Account) {
  console.log(account.name);
  if (account.role === "admin") {
    console.log(account.permissions);
  } else {
    console.log(account.purchaseCount);
  }
}

So, Intersection helps us combine types, while Union gives us multiple possible types.