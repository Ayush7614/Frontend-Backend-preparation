let name = {
  firstName: "Bharat",
  lastName: "Tyagi",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
name.printFullName();

let exampleForCall = {
  firstName: "Bongs",
  lastName: "Tyagi",
};

// We want to print full name of object exampleForCall, so we can
// borrow fuction from object name using call(), 
//so basically, it allows us to borrow functions from other objects.

name.printFullName.call(exampleForCall);

// Note: each and every function in javascript has access to these 3 methods.
// But most of the time we'll not have functions inside of an object, it needs to be declared separately like:

let userInfo = {
  firstName: "Bharat",
  lastName: "Tyagi",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullName.call(userInfo, "Agra", "Uttar Pradesh");

// call(reference i.e this, comma separated values(arguments))
// The difference between call and apply is just the arguements how it is passed. It's passed as an arrayList.

printFullName.apply(userInfo, ["Agra", "Uttar Pradesh"]);

// TIP :
// Call takes comma-separated values, can be remembered as `C's`
// and Apply takes arrayList as an arguement, it can also be remembered as `A's`.

// bind(), same as call() but instead of calling, it creates a copy of that function and binds the
// function which is being passed and also returns a new function
// It just used to bind and keep a copy of that method and can be used it later.

let printMyName = printFullName.bind(userInfo, "Agra", "Uttar Pradesh");
// we'll need to invoke to see the results
printMyName();
