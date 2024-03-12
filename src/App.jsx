import './App.scss';
import { Link } from "react-router-dom";
import Dark_theme from './components/dark_theme'
 
function App() {

  const launchHandler = () => {
    localStorage.setItem('firstLaunch', false);
    window.location.reload(false);
  }

  if ( localStorage.getItem('firstLaunch') === null ) {
    return (
      <div className="App">
        <header>Stankin app by <a href="https://t.me/the_kiruhanchik">Kiruhanchik</a></header>
        <main>
          <p>Привет, Станкиновец! Это приложение поможет тебе в учебе 🤝</p>
          <button id='start' onClick={launchHandler}>Начать</button>
        </main>
      </div>
    );
  }
  return (
    <div className="App" >
      <header>Stankin app by <a href="https://t.me/the_kiruhanchik">Kiruhanchik</a></header>
      <main >
        <h2>Выберите сервис</h2>
        <Link to='/titulnik'>Генерация титульного листа</Link>
        <Link to='/navigation'>Навигация по разделам вуза</Link>
        <Link to='/connect'>Преподаватели кафедры КСУ</Link>
        <Link to='/advises'>Советы для студентов</Link>
        <Dark_theme/>
      </main>
    </div>
  );
}

export default App;
