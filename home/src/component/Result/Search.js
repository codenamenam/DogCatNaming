/* eslint-disable */
import axios from "axios";

function Search(breed, typeSelect, names) {
  const arr = names.split(" ");
  var output = "";

  for (var i in arr) {
    var queryWords = breed + " " + arr[i] + "\n";
    output += queryWords;
  }
  return output;
}

export default Search;
