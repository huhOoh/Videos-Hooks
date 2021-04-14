import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../Apis/Youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have
        {" " + this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
