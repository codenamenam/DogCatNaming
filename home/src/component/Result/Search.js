/* eslint-disable */
import axios from "axios";

function Search(breed, typeSelect, names) {
  const arr = names.split(" ");
  var searchWords = {};
  var searchResults = "";
  var result = [];

  // JSON 형식으로 값 저장
  for (var i in arr) {
    var queryWords = arr[i];
    searchWords[queryWords] = "number";
  }

  try {
    var url = "http://127.0.0.1:8000/api/";
    if (typeSelect === "dog") {
      url += "dog";
    } else {
      url += "cat";
    }

    axios
      .get(url, {
        params: { breed: breed },
      })
      .then((response) => {
        searchResults = response.data;
        result.push(searchResults);
        console.log(searchResults[0]);
      });
  } catch (error) {
    console.error(error);
  }

  return result;
}

export default Search;
