import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[5%] w-screen"></div>
      <section className="h-[90%] flex" id="loading-page">
        <Sidebar />
        <Content />
      </section>
    </div>
  );
}

export default App;
