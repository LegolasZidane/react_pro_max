import { Link, useNavigate } from "react-router-dom";

function HomePage() {

  /*Imperative/programmatic navigation using useNavigate hook
    Ex: say a form is submitted, after a button click or a timer expired*/

  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/*We use this because normal link send request to server -> reloading the page.*/}
        {/* Go to <a href="/products">the list of products</a>. */}
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
