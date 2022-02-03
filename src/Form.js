import React from 'react';
import Data from './api_category.json';

export default function Form(props) {
  const [categories, setCategories] = React.useState();
  const [categoryElements, setCategoryElements] = React.useState();

  React.useEffect(() => {
    // fetch("https://opentdb.com/api_category.php")
    // .then(res => res.json())
    // .then(data => setCategories(data.trivia_categories));
    setCategories(Data.trivia_categories);
  }, []);

  React.useEffect(() => {
    if (categories != undefined) {
      setCategoryElements(
        [
          <option value="0" key="0">
            Any Category
          </option>,
        ].concat(
          categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })
        )
      );
    }
  }, [categories]);

  const difficultyElements = [
      <option value="0" key="0">
        Any Difficulty
      </option>
      ,
      <option value="easy" key="1">
        Easy
      </option>
      ,
      <option value="medium" key="2">
        Medium
      </option>
      ,
      <option value="hard" key="3">
        Hard
      </option>
  ];

  const typeElements = [
      <option value="0" key="0">
        Any Type
      </option>
      ,
      <option value="multiple" key="1">
        Multiple Choice
      </option>
      ,
      <option value="boolean" key="2">
        True / False
      </option>
  ];

  function handleChange(event) {
    props.setFormData(event.target.id, event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = 'https://opentdb.com/api.php?amount=';
    url += props.formData.amount;
    if (props.formData.category != '0') url += '&category=' + props.formData.category;
    if (props.formData.difficulty != '0') url += '&difficulty=' + props.formData.difficulty;
    if (props.formData.type != '0') url += '&type=' + props.formData.type;
    props.setApiURL(url);
  }

  return (
    <div className="form" style={props.style}>
    {!props.apiURL &&<form onSubmit={handleSubmit}>
      <label htmlFor="amount">Number of Questions:</label>
      <input
        type="number"
        id="amount"
        min="1"
        max="50"
        name="amount"
        defaultValue="10"
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="category">Select Category:</label>
      <select id="category" name="category" onChange={handleChange}>
        {categoryElements}
      </select>
      <br />
      <label htmlFor="difficulty">Select Difficulty:</label>
      <select id="difficulty" name="difficulty" onChange={handleChange}>
      {difficultyElements}
      </select>
      <br />
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="type" onChange={handleChange}>
      {typeElements}
      </select>
      <br />
      <button>Submit</button>
    </form>}
    </div>
  );
}
