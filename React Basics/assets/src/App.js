import './App.css';
import Cat from './assets/images/Cat.jpg';

function App() {
  const rondomImageUrl = 'https://source.unsplash.com/random/200x200';
  return (
    <div className="App">
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


    </div>
  );
}

export default App;
