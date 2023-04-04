import { supabase } from './supabaseClient';
import { useState } from 'react';
import './App.css';

var games = [
  {
    id: 0,
    title: "Civilization V",
    studio: "Firaxis",
    year: 2010,
    thumb: 'civilization.jpeg',
  },
  {
    id: 1,
    title: "Baba is You",
    studio: "Arvi Teikari",
    year: 2019,
    thumb: 'baba_is_you.jpeg',
  },
  {
    id: 2,
    title: "Risk of Rain 2",
    studio: "Hopoo Games",
    year: 2020,
    thumb: 'risk_of_rain.jpeg',
  },
];

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <>
    <h1>My favorite books</h1>
    <table>
      <th>Title</th>
      <th>Author</th>
      <th>ISBN-13</th>
      {
        myBooks.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.isbn}</td>
          </tr>
        ))
      }
    </table>
    </>
  );
}

function Title() {
  return (
    <div className="title">
      <h1>My favorite games</h1>
      <p>A list of my top three favorite games!</p>
    </div>
  );
}

function GameShelf({ children }) {
  return (
    <div className="shelf">{ children }</div>
  );
}

function Games() {
  const listGames = games.map(game =>
    <div className="game">
        <h2
          style={{
            color: game.year >= 2015 ? '#facdda' : '#accdaa'
          }}
        >{game.title}</h2>
        <img src={game.thumb} alt={game.title}></img>
        <p>{game.studio} ({game.year})</p>
    </div>
  );
  return (
    <div>{listGames}</div>
  );
}

function Hi() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <button onClick={doMagic}>
      This does something! {count}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library/>
        <Title></Title>
        <GameShelf>
          <Games />
        </GameShelf>
        <Hi></Hi>
      </header>
    </div>
  );
}

export default App;
