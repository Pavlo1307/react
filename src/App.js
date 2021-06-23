import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div>
        <Heading title='title 1 ' desc='desc 1'/>
        <Heading title='title 2' desc='desc 2'/>
        <Heading/>
    </div>
  );
}


function Heading(props) {
  return (
      <div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
      </div>
  );
}


