document.getElementById("search").addEventListener("click", () => {
    displayrickandmorty();
    });
    
    async function fetchData() {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character/1");
          if (response.status === 404) {
            alert("No se encontró el personaje");
                return;
          }
          const data = await response.json();
          displayCharacterDetails(data);
        } catch (error) {
            alert("Error al cargar los datos del personaje");
        }
      }
  
      function displayCharacterDetails(character) {
        const characterDetails = document.getElementById("character-details");
        characterDetails.innerHTML = `
          <h2>${character.name}</h2>
          <p>Género: ${character.gender}</p>
          <p>Origen: ${character.origin.name}</p>
          <img src="${character.image}" alt="${character.name}">
        `;
      }
  
      fetchData();