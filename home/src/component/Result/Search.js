/* eslint-disable */
import axios from "axios";

function Search(breed, typeSelect, names) {
  const arr = names.split(" ");
  /*1
  var searchWords = [];
  */
  var searchWords = {};

  // JSON 형식으로 값 저장
  for (var i in arr) {
    var queryWords = breed + " " + arr[i];
    searchWords[queryWords] = "value";
  }

  try {
    axios
      .get("http://127.0.0.1:8000/", {
        params: { words: searchWords },
      })
      .then((response) => {
        console.log(response.data);
      });
  } catch (error) {
    console.error(error);
  }

  return searchWords;
}

export default Search;
