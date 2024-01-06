import { useState, useEffect } from "react";

export const SpecficGoals = ({goals}) => {
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    if(goals) {
      let goalsList = goals.includes(';') ?  goals.split(';') : goals.split('.');
      console.log(goalsList);
      setGoalsList(goalsList);
    }
  },[goals]);

  return(
      goalsList.length !== 0 &&
      <>
        <p className="font-semibold mt-5 mb-2"> Objetivos Especificos</p>
        {goalsList.map((specificGoal, index) => {
          return(
            <p key={index}> {specificGoal} </p>
          )
        })}
      </>
  );
}