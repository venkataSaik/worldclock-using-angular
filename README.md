# worldclock-using-angular
Worldclock is an simple component which display the time,data and location.
We can display all the cities time and date by using this component.

## How it works?
when user enter the city name it will display the time,data and the name of the location in the below
when the user is not entering any city name, it will display error message by validation function.
when entering the wrong spelling of the city also, it will display the error message.
By clicking the submit button we can visualize the output clearly.
Input Decorator @input is used to provide user with required input
cityName="chennai";
getDataJson(event){
console.log("parent")
console.log(event);
}
This will give user to enter the city name.

