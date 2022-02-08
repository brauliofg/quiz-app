import React from 'react';
import Data from './api_category.json'

export default function Header(props) {
  const [curCategory, setCurCategory] = React.useState("Any Category");
  const [curDifficulty, setCurDifficulty] = React.useState("Any Difficulty")
  const categories = Data.trivia_categories;
  
  React.useEffect(()=>{
    let category = categories.find(o => o.id == props.formData.category);
    if(category!=undefined){
      setCurCategory(category.name);
    }
    else{
      setCurCategory("Any Category")
    }
    if(props.formData.difficulty=="0")
      setCurDifficulty("Any Difficulty");
    else
      setCurDifficulty(props.formData.difficulty[0].toUpperCase() + props.formData.difficulty.substring(1) + " Difficulty");
  }, [props.formData])

  function handleClick(){
      props.setApiURL(); //Reset apiURL
  }

  return (
    <header>
      <h1 className="header--title" onClick={handleClick}>Quiz App</h1>
      <div className="header--items">{curCategory}<br/>{curDifficulty}</div>
    </header>
  );
}
