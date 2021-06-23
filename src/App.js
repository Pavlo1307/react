import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div>
        <Heading/>
        <Heading/>
        <Heading/>
    </div>
  );
}


function Heading() {
  return (
      <div>
          <h2>Some heading</h2>
          <p>some description</p>
      </div>
  );
}


