import React from "react";

export default function CardPreviewer(props) {
  const styles = {
    backgroundColor: props.cardDetails.cardColor,
  };

  const cardImage = {
    backgroundImage: `url(${props.cardDetails.cardImage})`,
  };
  return (
    <div className="cardPreview" style={styles}>
      <div className="card-name-preview">{props.cardDetails.cardName}</div>
      <div className="card-type-preview">{props.cardDetails.cardType}</div>
      <div className="card-art-preview" style={cardImage}></div>
      <div className="card-text-preview">{props.cardDetails.cardEffect}</div>
    </div>
  );
}
