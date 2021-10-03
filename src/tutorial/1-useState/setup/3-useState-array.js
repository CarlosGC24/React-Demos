import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // Not always necessary to import
  const removeItem = (id) => {
    let newData = people.filter((person) => person.id !== id);
    setPeople(newData);
  };

  return (
    <>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
