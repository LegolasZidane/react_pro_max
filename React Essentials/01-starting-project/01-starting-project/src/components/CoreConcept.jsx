
export default function CoreConcept({image, title, description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{description}</h3>
      <p>{title}</p>
    </li>
  );
}