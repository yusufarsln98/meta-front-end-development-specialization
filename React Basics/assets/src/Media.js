import './App.css';
import Cat from './assets/images/Cat.jpg';
import ReactPlayer from  'react-player/youtube'
import React from 'react';

function Media() {
    const rondomImageUrl = 'https://source.unsplash.com/random/200x200';
    return (
      <div className="App">
        <div>
          <h1>
            Task: add three images with some styling
          </h1>
          <img 
            src={Cat} 
            height={200} 
            alt="Kitty" 
          />
          <img
            src = {require('./assets/images/Panda.jpg')}
            height = {200}
            alt = "Pandaaa"
          />
  
          <img
            src = {rondomImageUrl}
            height = {200}
            alt = "Random"
          />
  
          <h1> Task: add a video </h1>
          <MyVideo />
        </div>
  
      </div>
    );
  }
  
  const MyVideo = () => {
    return (
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        playing = {false}  // auto play 
        controls = {true}
        width = {400}
        height = {300}
        volume = {0.5}
      />
    );
  };

  export default Media;