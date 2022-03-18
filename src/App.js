import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Stays from "./components/Stays";
import { useState } from "react";

function App() {
  const [itemsRequired, setItemsRequired] = useState({
    locationRequired: "Culito",
    guestrequired: "",
  });

function addSearch(newSearch){
  console.log(newSearch)
  setItemsRequired({    locationRequired: newSearch,
    guestrequired: "",})
}

  return (
    <>
      <Nav placeLookFor={addSearch}
    
      />
      <Stays
        placeLookFor={itemsRequired.locationRequired}
      />
      <Footer />
    </>
  );
}

export default App;
