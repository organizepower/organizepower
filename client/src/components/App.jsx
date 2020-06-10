import React from 'react';
// import axios from 'axios';

import OtherComponent from './OtherComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3'],
    };
  }

  componentDidMount() {
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Organize Power</h1>
        <OtherComponent items={items} />
      </div>
    );
  }
}

export default App;
