import CourseInfo from "./CourseInfo";
import "./Header.css";

function App() {
  return (
    <div>
      <header>
        <button className="header-button">Кнопка 1</button>
        <button className="header-button">Кнопка 2</button>
      </header>
      <main>
        <CourseInfo />
      </main>
    </div>
  );
}

export default App;
