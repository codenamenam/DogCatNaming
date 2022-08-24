/* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";

function Search(breed, typeSelect) {
  const [result, setResult] = useState("");

  useEffect(() => {
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
          const searchResults = response.data;
          setResult(searchResults[0]);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return result;
}

export default Search;
