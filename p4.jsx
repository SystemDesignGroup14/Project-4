import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example.jsx';
import States from './components/states/States.jsx';

class P4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'states', // initialization 
    };
  }

  toggleView = () => {
    this.setState(prevState => ({
      currentView: prevState.currentView === 'example' ? 'states' : 'example',
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleView}>
          Switch to {this.state.currentView === 'example' ? 'States' : 'Example'}
        </button>
        {this.state.currentView === 'example' ? <Example /> : <States />}
      </div>
    );
  }
}

// Rendering p4 component
ReactDOM.render(<P4 />, document.getElementById('reactapp'));
