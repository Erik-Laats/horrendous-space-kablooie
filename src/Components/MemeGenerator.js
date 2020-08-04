import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randInt = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const newMeme = this.state.allMemeImgs[randInt].url;
    this.setState({
      randImage: newMeme,
    });
  };

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <form className="meme-form">
          <input
            name="topText"
            value={this.state.topText}
            type="text"
            placeholder="top text"
            onChange={this.handleChange}
          />
          <input
            name="bottomText"
            value={this.state.bottomText}
            type="text"
            placeholder="bottomnul text"
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randImage} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="botton">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
