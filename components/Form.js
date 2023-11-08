import React from 'react';

function Form() {
  return (
    <div>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" />

      <br />

      <label htmlFor="completedBy">Completed By:</label>
      <input type="text" id="completedBy" name="completedBy" />
    </div>
  );
}

export default Form;

