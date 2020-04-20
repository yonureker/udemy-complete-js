class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`hello ${this.name}`)
  }
}

const person1 = new Person('James', 30)
person1.greet();

