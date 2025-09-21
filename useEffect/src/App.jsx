import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map( id => AVAILABLE_PLACES.find( place => place.id === id ));

export default function App() {

  // Even putting the code here is redundant as we just need this to run once.
  // const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  // const storedPlaces = storedIds.map( id => AVAILABLE_PLACES.find( place => place.id === id ));

  // const modal = useRef();
  const selectedPlace = useRef();
  const [ availablePlaces, setAvailablePlaces ] = useState([]);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ pickedPlaces, setPickedPlaces ] = useState(storedPlaces);

  //This would be redundant because the code below is instantaneous(sync. code).
  //This is a side-effect, but not all side-effects need useEffect() remember.
  // useEffect( () => {

  //   const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  //   const storedPlaces = storedIds.map( id => AVAILABLE_PLACES.find( place => place.id === id ));

  //   setPickedPlaces(storedPlaces);
  // }, []);

  useEffect(() => {
    
      navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
    
      setAvailablePlaces(sortedPlaces);
    });

  }, []);

  // This is a side-effect because even though we need this to happen,
  // this is not some renderable jsx code which a component is basically used for.
  // Saving the data in a state from within this func will set an infinite loop => useEffect.
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
  
  //   setAvailablePlaces(sortedPlaces);
  // });

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    //This is not because it is related to the UI???
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });


    //The code below is also a side-effect, but useEffect not required right. 
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if( storedIds.indexOf(id) === -1 ) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') || []);
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter( id => id !== selectedPlace.current )));
  }, []);
  // function handleRemovePlace() {
  //   setPickedPlaces((prevPickedPlaces) =>
  //     prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
  //   );
  //   // modal.current.close();
  //   setModalIsOpen(false);

  //   const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') || []);
  //   localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter( id => id !== selectedPlace.current )));
  // }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>{/*Changed ref to prop */}
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={'Sorting places by distance...'}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}