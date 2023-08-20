import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function Hello() {

  const changeImageKey = (key: number) =>{
    console.log("Changin");
    ipcRenderer.send("changeImageKey", { keyToChange: key });
  }

  ipcRenderer.on('changedImageKey', (e, data) => {
    console.log("Image changed for button", data);
  })

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center w-[80%] glass rounded-box p-4'>
        <p className='text-xl text-white'>Mi teclado</p>
        <div className='divider'></div>
        <div className='flex flex-row justify-center flex-wrap gap-8'>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(1)}>key1</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(2)}>key2</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(3)}>key3</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(4)}>key4</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(5)}>key5</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(6)}>key6</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(7)}>key7</div>
          <div className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={() => changeImageKey(8)}>key8</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
