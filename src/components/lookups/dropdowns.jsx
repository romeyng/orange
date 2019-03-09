import React from "react";

export const PrepaidCustomer = props => {
  let element = (
    <>
      <select
        className={props.classList}
        name="customer"
        onChange={props.handleChange}
        value={props.selected}
        disabled={props.disabled}
      >
        {props.customerOptions}
      </select>
    </>
  );
  return element;
};
