import { useState } from "react";

const defaultFormData = {
  searchTerm: "",
};

export const SearchForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        value={formData.searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <p>{`Searching for: ${formData.searchTerm}`}</p>
    </form>
  );
};
