//The useParams hook let's us access the parameter used(after the ":").
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details...</h1>
      {/*The identifier used in the links path should match while referencing it through params.*/}
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
