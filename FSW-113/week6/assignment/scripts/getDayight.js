// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.


export default function dayOrNight(data) {
    if(data.weather[0].icon.includes("d") === true){
        return "a"
    }
    else {
        return "b"
 }}