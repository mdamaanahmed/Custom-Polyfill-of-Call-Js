const person = {
  firstName: "John",
  lastName: "Doe",
  address: "Noida",
};

const personDetails = function (profession, salary) {
  return `Hello👋, my name is ${this.firstName} ${this.lastName} and my working profession is ${profession} with ${salary}₹ salary. Currently living in ${this.address}.`;
};

const defaultCall = personDetails.call(person, "Frontend Developer", "10");
console.log("defaultCall:", defaultCall);

Function.prototype.customCall = function (context, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function.`);
  context.function = this;
  return context.function(...args);
};

const customCall = personDetails.customCall(person, "Backend Developer", "12");
console.log("customCall:", customCall);
