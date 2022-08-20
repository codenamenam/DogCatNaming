/* eslint-disable */
import axios from "axios";

function Search(breed, typeSelect, names) {
  const arr = names.split(" ");
  var searchWords = {};
  var searchResults;

  // JSON 형식으로 값 저장
  for (var i in arr) {
    var queryWords = arr[i];
    searchWords[queryWords] = "number";
  }

  try {
    axios
      .get("http://127.0.0.1:8000/", {
        params: { words: searchWords, breed: breed },
      })
      .then((response) => {
        searchResults = response.data;
      });
  } catch (error) {
    console.error(error);
  }

  return searchWords;
}

export default Search;
