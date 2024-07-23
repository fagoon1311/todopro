import './App.css';
import Body from './components/Body';



function App() {
  return (
    <div className="App relative min-h-screen w-full flex flex-col items-center px-5 py-2 bg-fixed" style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}>
      <div className='flex p-4 m-2 rounded-md shadow-md items-center justify-center'>
        <h1 className='text-white text-5xl font-bold'>To-do-List</h1>
      </div>
      <Body />
    </div>
  );
}


export default App;
