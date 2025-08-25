import TabButton from "./TabButton/TabButton";
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

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

    return (<Section title="Examples" id="examples">
              <Tabs
                // ButtonsContainer="menu" 
                buttons={
                  <>
                    <TabButton isSelected={ selectedTopic === 'components' } 
                      onClick={() => handleSelect('components')}
                    >
                      Components
                    </TabButton>
                    <TabButton isSelected={ selectedTopic === 'jsx' }
                      onClick={() => handleSelect('jsx')}
                    >
                      JSX
                    </TabButton>
                    <TabButton isSelected={ selectedTopic === 'props' }  
                      onClick={() => handleSelect('props')}
                    >
                      Props
                    </TabButton>
                    <TabButton isSelected={ selectedTopic === 'state' } 
                      onClick={() => handleSelect('state')}
                    >
                      State
                    </TabButton>
                  </>
                }>
                  { tabContent }
              </Tabs>
            </Section>);
}