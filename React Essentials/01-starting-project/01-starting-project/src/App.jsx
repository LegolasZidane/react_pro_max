import componentsImage from './assets/components.png';
import { CORE_CONCEPTS } from './data';

function CoreConcept({image, title, description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{description}</h3>
      <p>{title}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
           <CoreConcept 
              {...CORE_CONCEPTS[1]} />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
