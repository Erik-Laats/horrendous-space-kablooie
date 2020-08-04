import React from "react";

export default function CardForm(props) {
  return (
    <div>
      <form className="cardForm">
        <label>Card Name</label>
        <input
          type="text"
          name="cardName"
          placeholder="Bobby Scarnewman"
          onChange={props.handleChange}
          value={props.cardDetails.cardName}
        />
        <br />
        <input type="file" name="cardImage" onChange={props.handleChange} />
        <br />
        <label>Card Text</label>
        <textarea
          name="cardEffect"
          placeholder="Bobby punches the sky with rage"
          onChange={props.handleChange}
          value={props.cardDetails.cardEffect}
          rows="10"
        />
        <br />
        <label>Card Type</label>
        <select
          value={props.cardDetails.cardType}
          name="cardType"
          onChange={props.handleChange}
        >
          <option value="unit">Unit</option>
          <option value="invention">Invention</option>
          <option value="energy">Energy</option>
        </select>
        <br />

        {props.cardDetails.cardType === "unit" && (
          <div>
            <label>Unit Power</label>
            <input
              type="number"
              name="cardPower"
              min="0"
              max="20"
              onChange={props.handleChange}
              value={props.cardDetails.cardPower}
            />
            <br />
            <label>Unit HP</label>
            <input
              type="number"
              name="cardHP"
              min="0"
              max="20"
              onChange={props.handleChange}
              value={props.cardDetails.cardHP}
            />
          </div>
        )}

        <label>Card Fuel</label>
        <select
          value={props.cardDetails.cardColor}
          name="cardColor"
          onChange={props.handleChange}
        >
          <option value="#dfdfdf">Wind</option>
          <option value="yellow">Electric</option>
          <option value="red">Fire</option>
          <option value="green">Sunlight</option>
          <option value="blue">Water</option>
        </select>
        <br />
      </form>
    </div>
  );
}
