import { useEffect, useState } from "react";

//hook created to include list of animals from API
function useAnimals() {
  //animals=current state, setAnimals=state setter
  const [animals, setAnimals] = useState([]); //we define useState and start with empty array

  //useEffect executes something at the end of the whole execution in React
  //useEffect = actions are exectued after the DOM is loaded (at the end)
  //fetch can have a lot of data, we need client.getEntries otherwise website won´t be shown
  //with client.getEntries we can have loading state
  // useEffect(() => {
  //   client
  //     .getEntries()
  //     //if the server replies
  //     //response is a variable, depends on map function
  //     .then((response) => {
  //       console.log(response);
  //       console.log(JSON.stringify(response));
  //       const newAnimals = response.items.map((item) => getAnimal(item));
  //       console.log(JSON.stringify(newAnimals));
  //       setAnimals(newAnimals); //-> actions after answer, asynchronous callback
  //     })
  //     .catch((error) => console.log("Request failed: " + error));
  //   //.catch -> in order to control error -> browser will display "Request failed" if promise is not fulfilled, but rejected
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/animals")
      .then((response) => response.json())
      .then((json) => {
        
        setAnimals(json.data);
      })
      .catch(() => console.log("Request failed"));
  }, []);
  return animals;
}

export default useAnimals;
