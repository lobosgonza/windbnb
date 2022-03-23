import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Stays from "./components/Stays";
import { useState } from "react";

function App() {
  const [itemsRequired, setItemsRequired] = useState({    location: "Finland",
  guests: ""});

  function addSearch(newSearch) {
    // console.log(newSearch)
    setItemsRequired(newSearch)
  }
  return (
    <>
      <Nav placeLookFor={addSearch} />

      <Stays placeLookFor={itemsRequired.location} guestLookFor={itemsRequired.guests} />
      <Footer />
    </>
  );
}

export default App;
