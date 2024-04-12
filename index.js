
// Write your solution here!
   //push adds one or multiple elements at the end
   //array.push(cat/element)

   //pop removes the last element from the array
   //array.pop()

   //unshift adds an element at the beginning of an array
   //array.unsshift(element/cat)

   //slice does not modify the new array but creates a new one
   //it takes two arguments. Includes the starting index and excludes the last index.

  //declare/define the function/cats with let
  let cats = ['Milo', 'Otis', 'Garfield'];

  function destructivelyAppendCat(name) {
    cats.push(name);
  }
  //
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  //use spread operator ... to create new arrays that include the original cat
  function appendCat(name) {
    return [...cats, name];
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function removeFirstCat() {
    return cats.slice(1);
  }
  

//reset the cat/array to the original state using beforeEach()
beforeEach(function() {
    cats = ['Milo', 'Otis', 'Garfield'];
});


function appendCat(name){
    return [...cats, name];

}

function prependCat(name){
    return[name, ...cats];

}


cats = appendCat(cats);
console.log(cats); 


cats = prependCat(cats);
console.log(cats);


cats.pop();
console.log(cats);
