import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content";

function App() {

  const [ addClicked, setAddClicked ] = useState(false);
  const [ projectClicked, setProjectClicked ] = useState(false);

  function handleAddClicked(){
    setAddClicked(prev => prev = true);
  }

  function handleCancelClicked(){
    setAddClicked(prev => prev = false);
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[5%] w-screen"></div>
      <section className="h-[95%] flex" id="loading-page">
        <Sidebar onClickAdd={handleAddClicked}/>
        <Content 
          addPressed={addClicked}
          projectPressed={projectClicked}
          onClickCancel={handleCancelClicked}
        />
      </section>
    </div>
  );
}

export default App;