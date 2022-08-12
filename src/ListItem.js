import React from "react";

function ListItem({ recipes, handleDelete }) {
  return recipes.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>
          <p>{recipe.cuisine}</p>
        </td>
        <td>
          <img src={recipe.photo} alt={recipe.name}></img>
        </td>
        <td>
          <p>{recipe.ingredients}</p>
        </td>
        <td>
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
}

export default ListItem;
