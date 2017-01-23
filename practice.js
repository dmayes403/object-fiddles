// //Once you complete a problem, open up Chrome and check the answer in the console.
//
//
// //Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.
//
//   //Code here
// var me = {
//   name: 'David',
//   age: '28'
// }
//
// alert(me.name);
//
//
// //NEXT PROBLEM
//
//
//
//
// //Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.
//
//   //Code here
// var favoriteThings = {
//   band: 'Maroon 5',
//   food: 'Hawaiian Haystacks',
//   person: 'Bri',
//   book: 'Javascript',
//   movie: 'Lord of the Rings',
//   holiday: 'Black Friday'
// }
//
// //After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
//
//   //Code here
// favoriteThings.car = 'Integra';
// favoriteThings.brand = 'Acura';
//
// //Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.
//
//   //Code here
//
// favoriteThings.food = 'Lettuce';
// favoriteThings.book = '50 Shades of Gray';
//
//
// //NEXT PROBLEM
//
//
//
// /*Create an empty Object called backPack. Now, create a variable called 'item'
// and set it equal to the string 'firstPocket'. Using bracket notation,
// add a 'firstPocket' key (or property) to backPack, using 'item'.
// Set the value of that key to 'chapstick'.
//
// Using dot notation, add another key (or property) to your backPack object
// that is named color, with the value being the color of your backpack. */
//
//   //Code here
//
// var backPack = {};
// var item = 'firstPocket';
// backPack[item] = 'chapstick';
// backPack.color = 'orange';
//
//
// //After you do the above, alert your entire backPack object.
//
//   //Code here
//
// alert(backPack);
//
// /*You probably noticed that it just alerted [object Object].
// Alerting to see the data in your Object doesn't work so well.
// Instead, console.log your whole backPack object and then check out the console. */
//
//   //Code here
//
// console.log(backPack);
//
//
// //NEXT PROBLEM
//
//
//
//
// //Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.
//
//   //Code Here
//
// var alsoMe = {
//   name: 'Dave',
//   age: '27',
//   height: '5\'7\"',
//   gender: 'Male',
//   married: 'Yes',
//   eyeColor: 'Brown',
//   hairColor: 'Brown'
// }
// //Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc
//
//   //Code Here
// for(var v in alsoMe){
//   alert(alsoMe[v]);
// }
//
//
//
// //NEXT PROBLEM
//
//
//
//
// //Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.
//
//   //Code Here
// var album = {
//   hello: '2:00',
//   goodbye: '10:21',
//   sayHi: '3:33',
//   Tutoo: '1:12:45',
//   Bingo: '1:32'
// }
//
//
// //Now, loop through your album object alerting every song title individually.
//
//   //Code Here
// for(var v in album){
//   alert(v);
// }
//
//
// //NEXT PROBLEM
//
//
//
//
// //Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).
//
//   //Code Here
//
// var states = {
//   florida: '2837372',
//   indiana: '6627',
//   mississippi: '82827',
//   oklahoma: '3456',
//   maine: '98292392839239'
// }
// //Now, loop through your states object and if the states population is greater than 30K, alert that state.
//
//   //Code Here
//
// for(var k in states){
//   if(states[k] > 30000){
//     alert(k);
//   }
// }
//
//
// //NEXT PROBLEM
//
// var user1 = {
//     name: 'Tyler McGinnis',
//     email: null,
//     pwHash: 'U+Ldlngx2BYQk',
//     birthday: undefined,
//     username: 'tylermcginnis33',
//     age: 0
// }
//
// /*Above you're given a user object. Loop through the user object checking to make sure
// that each value is truthy. If it's not truthy, remove it from the object. */
//
//   //Code Here
//
//   for(var k in user1){
//     if(!user1[k]){
//       delete user1[k];
//     }
//   }
//   console.log(user1);
//
// //Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
//
//   //Code Here
// user1.name = 'Dave';
// user1.username = 'daveMayes7172';
//
// //NEXT PROBLEM
//
// var user2 = {
//         name: 'Tyler McGinnis',
//         age: 24,
//         pwHash: 'U+Ldlngx2BYQk',
//         email: 'tylermcginnis33@gmail.com',
//         birthday: '05/02/1990',
//         username: 'tylermcginnis33',
//         sayEmail: function(){
//             alert('Email is : ' + this.email);
//         }
// };
//
// //Let's say I, the user, decided to change my name and email address to the following
// // name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
//
//   //Code Here
//
// user2.name = 'Tyler S. McGinnis';
// user2.email = 'tyler.mcginnis@devmounta.in';
// //Now call the sayEmail method that's on the user object which will alert the users email
//
//   //Code Here
// user2.sayEmail();
//
//
//
// //NEXT PROBLEM
//
//
//
//
// //Create an empty object called methodCollection.
//
//   //Code Here
//
// var methodCollection = {};
//
// /*Now add two methods (functions that are properties on objects) to your methodCollection
// object. One called 'alertHello' which alerts 'hello' and another method called logHello
//  which logs 'hello' to the console. */
//
//   //Code Here
// methodCollection.alertHello = function(){
//   alert('hello');
// }
//
// methodCollection.logHello = function(){
//   console.log('hello');
// }
//
// //Now call your alertHello and logHello methods.
//
//   //Code Here
// methodCollection.alertHello();
// methodCollection.logHello();
//
//
// //NEXT PROBLEM
//
//
//
// // Create a function called makePerson which takes in name, birthday, ssn as its
// // parameters and returns a new object with all of the information that you passed in.
//
//   //Code Here
//
// var makePerson = function(name, birthday, ssn){
//   var newPerson = {};
//   newPerson.name = name;
//   newPerson.birthday = birthday;
//   newPerson.ssn = ssn;
//   return newPerson;
// }
//
// //NEXT PROBLEM
//
// // Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.
//
//   //Code Here
//
// var makeCard = function(cardNumber, expirationDate, securityCode){
//   var newCard = {};
//   newCard.cardNumber = cardNumber;
//   newCard.expirationDate = expirationDate;
//   newCard.securityCode = securityCode;
//   return newCard;
// }
//
//
// //NEXT PROBLEM
//
//
//
// /* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
//    Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
//    Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
// */
//
//   //Code Here
//
//   var bindCard = function(person, newCard){
//       var binded = {};
//       binded.name = person.name;
//       binded.birthday = person.birthday;
//       binded.ssn = person.ssn;
//       binded.cardNumber = newCard.cardNumber;
//       binded.expirationDate = newCard.expirationDate;
//       binded.securityCode = newCard.securityCode;
//       return binded;
//   }
//
//   console.log(bindCard(makePerson('Dave','4/18/89','2323232'),makeCard('389293848','1/12/43','453')));




///////////////////////
///////////////////////////////
//////////////////////





//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

var me = {
  name: 'David',
  age: '27'
}

alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here

var favoriteThings = {
  band: 'Ed Sheeran',
  food: 'Potatoes',
  person: 'Jett',
  book: 'Summer of the Monkies',
  movie: 'Split',
  holiday: 'Christmas'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = 'Traverse';
favoriteThings.brand = 'Cheverolet';

//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  //Code here

favoriteThings.food = 'Chicken Nuggets';
favoriteThings.book = 'Harry Potter';


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.
Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here

var backPack = {};
var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'orange';
//After you do the above, alert your entire backPack object.

  //Code here

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here

  console.log(backPack);



//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here

var alsoMe = {
  name: 'Dave',
  age: '33',
  height: '5\'7\"',
  gender: 'Male',
  married: 'Married',
  eyeColor: 'White',
  hairColor: 'Brown'
}
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
for(var k in alsoMe){
  alert(alsoMe[k]);
}



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here

var album = {
  SeventhHeaven: '1:34',
  DustyDigger: '12:34',
  GoldRush: '2:54',
  ThreeDaysAgo: '8:54',
  HelloGoodBye: '3:42'
}

//Now, loop through your album object alerting every song title individually.

  //Code Here

for(var k in album){
  alert(k);
}


//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

var states = {
  Iowa: '123321',
  California: '738723',
  Alaska: '12234',
  Kentucky: '45463',
  Utah: '1214'
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here

for(var k in states){
  if(states[k] > 30000){
    alert(k);
  }
}


//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

for(var k in user1){
  if(!user1[k]){
    delete user1[k];
  }
}

console.log(user1);

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
user1.name = 'Dave Mayes';
user1.pwHash = 'paswrd';
user1.username = 'daveMayes';



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

user2.name = 'Tyler S. McGinnis';
user2.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayEmail method that's on the user object which will alert the users email

  //Code Here
user2.sayEmail();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

methodCollection.alertHello = function(){
  alert('hello');
  methodCollection.logHello = function(){
    console.log('hello');
  }
}

//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  //Code Here

function makePerson(name, birthday, ssn){
  var newPerson = {};
  newPerson.name = name;
  newPerson.birthday = birthday;
  newPerson.ssn = ssn;
  return newPerson;
}

//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  //Code Here
function makeCard(cardNumber, expirationDate, securityCode){
  var newCard = {};
  newCard.cardNumber = cardNumber;
  newCard.expirationDate = expirationDate;
  newCard.securityCode = securityCode;
  return newCard;
}


//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  //Code Here


function bindCard(person,card){
  binded = {};
  binded.name = person.name;
  binded.birthday = person.birthday;
  binded.ssn = person.ssn;
  binded.cardNumber = card.cardNumber;
  binded.expirationDate = card.expirationDate;
  binded.securityCode = card.securityCode;
  console.log(binded);
  return binded;
}

bindCard(makePerson('David','1/2/89','3944-39394'),makeCard('23214235','12/12/4','928'));
