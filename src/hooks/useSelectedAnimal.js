import { useState } from "react";



//we created this custom hook in order to retrieve the data from single animals to use for thumbnails and video 
//if we click on thumbnail/carousel we want to display various images, we want to load pictures on request and do not want to load all of them once we load the page
//we create various useState with selectedAnimal
function useSelectedAnimal() {
  const [selectedAnimal, setSelectedAnimal] = useState([]); //empty array to start
  const [isLoading, setIsloading] = useState(false); //at the beginning: false

  //fetch resources asynchronously, we need a method to call this hook
  //fetchAnimal is like a method in a class
  //   fetch("http://localhost:5000/animals")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setAnimals(json);
  //     console.log(json);
  //   })
  //   .catch(() => console.log("Request failed"));
  // }, []);

  const fetchAnimal = (_id) => {
    setIsloading(true);
    const fetchString = `http://localhost:5000/animals/${_id}`
    fetch(fetchString)
          .then((response) => response.json())
          .then((json) => {
            setSelectedAnimal(json.data);
            console.log(json.data);
            setIsloading(false);
          })
        .catch((error) => console.log("Request failed: " + error));
  };
  return [selectedAnimal, fetchAnimal, isLoading];
}

export default useSelectedAnimal;
/*
import { useEffect, useState } from "react";
import { client } from "./client";
import PropTypes from "prop-types";

const getAnimal = (animal) => ({
  idVideo: animal.fields.video.fields.file.fileName.replace("watch?v=", ""),
  name: animal.fields.name,
  latinName: animal.fields.latinName,
  thumbnails: animal.fields.thumbnails?.map((thumb) => ({
    url: thumb.fields.file.url + "?w=470&h=300&fit=fill",
    title: thumb.fields.title,
  })),
  img: animal.fields.image?.fields.file.url + "?w=400&h=300&fit=fill",
});

function useSelectedAnimal(id) {
  const [selectedAnimal, setSelectedAnimal] = useState([]);

  const fetchAnimal = (id) => {
    client.getEntry(id).then((response) => {      
      setSelectedAnimal(getAnimal(response));
      //console.log(response);      
    });
  };

  

  
  return [selectedAnimal, fetchAnimal];
}

export default useSelectedAnimal;

*/