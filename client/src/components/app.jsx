import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('forager')
    return (
      <div>
        <h1>
          Hi from React
        </h1>
      </div>
    )
  }
}

export default App;