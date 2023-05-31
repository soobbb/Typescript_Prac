interface User {
	name: string;
	age: number;
	job: string;
}

interface Greeting {
	(user: User, greeting: string): string;
}

const greet: Greeting = (user, greeting) => {
	return `${greeting}, ${user.name}! Your job : ${user.job}.`;
}

const user: User = {
	name: "anna",
	age: 30,
	job: "developer"
};

const message = greet(user, "Hi");

console.log(message);

//

interface Cal {
  add(x: number, y: number): number;
  substract(x: number, y: number): number;
}
class SimpleCal implements Cal {
  add(x: number, y: number){
    return x + y;
  }
  substract(x: number, y: number): number {
      return x - y;
  }
}
const Cal = new SimpleCal;

console.log(Cal.add(10,20));
console.log(Cal.substract(20,10));

// 상속
interface Animal {
  name: string;
  age: number;
  eat: () => void;
}

interface Dog extends Animal {
  breed: string;
  bark: () => void;
}

interface Cat extends Animal {
  color: string;
  meow: () => void;
}

const dog: Dog = {
  name: "Buddy",
  age: 3,
  breed: "Labrador Retriever",
  eat() {
    console.log("The dog is eating.");
  },
  bark() {
    console.log("Woof!");
  },
};

const cat: Cat = {
  name: "Whiskers",
  age: 5,
  color: "Orange",
  eat() {
    console.log("The cat is eating.");
  },
  meow() {
    console.log("Meow!");
  },
};

dog.eat(); // The dog is eating.
dog.bark(); // Woof!

cat.eat(); // The cat is eating.
cat.meow(); // Meow!
