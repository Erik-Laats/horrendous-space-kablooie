import React from "react";
import CardForm from "../Components/CardForm";
import CardPreviewer from "../Components/CardPreviewer";

export default class CardCreator extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: "",
      cardEffect: "",
      cardType: "unit",
      cardColor: "red",
      cardPower: "",
      cardHP: "",
      cardImage: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    if (type === "file") {
      this.setState({
        cardImage: URL.createObjectURL(event.target.files[0]),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    return (
      <div>
        <CardForm handleChange={this.handleChange} cardDetails={this.state} />
        <CardPreviewer cardDetails={this.state} />
      </div>
    );
  }
}
