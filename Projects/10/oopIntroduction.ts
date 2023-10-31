class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  
    fetch() {
      console.log(`${this.name} is fetching.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    scratch() {
      console.log(`${this.name} is scratching.`);
    }
  }
  
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  dog.makeSound();
  cat.makeSound();
  
  dog.fetch();
  cat.scratch();
  