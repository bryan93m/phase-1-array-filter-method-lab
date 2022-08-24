// Code your solution here
function findMatching(array, name) {
  return array.filter(function(element) {
    return element.toLowerCase().startsWith(name.toLowerCase());
  }).sort();
}
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, name){
    function matchName(drivers){
        return drivers.startsWith(name);
    }
    return drivers.filter(matchName);
}

function matchName(drivers, string){
    function matchedName(driversName){
        return driversName.name.toLowerCase() === string.toLowerCase();
    }
    return drivers.filter(matchedName);
}