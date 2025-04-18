import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [
        './components/header/S10.jpg',
        './components/header/S5.jpeg',
        './components/header/S11.jpg',
        './components/header/S4.jpg',
        './components/header/niner.jpeg',
        './components/header/S3.jpg'
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.showNextSlide, 1500); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNextSlide = () => {
    const { currentSlide, images } = this.state;
    this.setState({
      currentSlide: (currentSlide + 1) % images.length
    });
  };

 
  handleButtonClick = (url) => {
    this.setState({ redirectTo: url });
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { redirectTo } = this.state;
    if (redirectTo && redirectTo !== prevState.redirectTo) {
      window.location.href = redirectTo;
    }
  }
  
  

  render() {
    const { currentSlide, images } = this.state;
    const slideStyle = {
      backgroundImage: `url(${images[currentSlide]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '200px',
      color: 'black', 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div className="header" style={slideStyle}>
       
        <h1>SSDI Group 12</h1>
        <div>
          <button onClick={() => this.handleButtonClick('/getting-started.html')}>Getting Started</button>
          <button onClick={() => this.handleButtonClick('/p2.html')}>p2.html</button>
          <button onClick={() => this.handleButtonClick('/p4.html')}>p4.html</button>
          <button onClick={() => this.handleButtonClick('/p5.html')}>p5.html</button>
        </div>
      </div>
    );
  }
}

export default Header;
