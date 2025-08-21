import TabButton from "./TabButton/TabButton";
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';

export default function Examples(){

  const [ selectedTopic, useSelectedTopic ] = useState(false);

  function handleSelect(selectedButton){
    
    useSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <div id="tab-content"><h3>Please select a topic</h3></div>;

  if(selectedTopic){

    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);

  }

    return (<section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ selectedTopic === 'components' } 
             onSelect={() => handleSelect('components')}
            >Components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx' }
             onSelect={() => handleSelect('jsx')}
            >JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props' }  
             onSelect={() => handleSelect('props')}
            >Props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state' } 
             onSelect={() => handleSelect('state')}
            >State</TabButton>
          </menu>
          { tabContent }
        </section>);
}