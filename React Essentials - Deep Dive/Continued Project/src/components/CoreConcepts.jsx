import CoreConcept from './CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from '../data-with-examples';

export default function CoreConcepts(){
    return (<section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                {CORE_CONCEPTS.map((concept) => (
                  <CoreConcept key={concept.title} {...concept} />
                ))}
               {/* <CoreConcept 
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
                  image={CORE_CONCEPTS[3].image} /> */}
              </ul>
            </section>);
}