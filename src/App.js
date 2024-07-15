import './App.css';
import Body from './components/Body';
import Task from './components/Task'

function App() {
  return (
    <div className=" App absolute inset-0 -z-10 h-full w-full items-center px-5 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className='flex p-4 m-2 rounded-md shadow-md items-center justify-center'><h1 className='text-white text-5xl font-bold'>To-do-List</h1></div>
      <Body />
    </div>
  );
}

export default App;
