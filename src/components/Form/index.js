import { useState } from "react";
import View from "./view";

const Form = ({ onSubmit, isReady }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleTextChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    setSearchInput("");
  };

  return (
    <View
      isReady={isReady}
      searchInput={searchInput}
      handleTextChange={handleTextChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form;
