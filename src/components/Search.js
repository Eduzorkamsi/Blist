import React from "react";
import Autocomplete from "./AutoComplete";

function Search() {
  return (
    <div>
      <Autocomplete suggestions={["Mtn", "Kilimanjaro", "Telcos", "Foods", "Telecommunication"]}/>
    </div>
  );
}

export default Search