const url = "https://api-colombia.com/api/v1/Country/Colombia";

const cargando = document.getElementById("cargando");
const error = document.getElementById("error");
const contenido = document.getElementById("contenido");

fetch(url)
  .then(function (respuesta) {
    if (!respuesta.ok) {
      throw new Error("La API respondió con error " + respuesta.status);
    }
    return respuesta.json();
  })
  .then(function (datos) {
    console.log(datos);

    cargando.style.display = "none";

    contenido.innerHTML = `
      <img src="${datos.flags[0]}" alt="Bandera de Colombia" class="bandera">
      <h2>${datos.name}</h2>
      <p>${datos.description}</p>

      <div class="tarjetas">
        <div class="tarjeta">
          <h3>Capital</h3>
          <p>${datos.stateCapital}</p>
        </div>
        <div class="tarjeta">
          <h3>Población</h3>
          <p>${datos.population.toLocaleString()} habitantes</p>
        </div>
        <div class="tarjeta">
          <h3>Superficie</h3>
          <p>${datos.surface.toLocaleString()} km²</p>
        </div>
        <div class="tarjeta">
          <h3>Moneda</h3>
          <p>${datos.currency} (${datos.currencySymbol})</p>
        </div>
        <div class="tarjeta">
          <h3>Idiomas</h3>
          <p>${datos.languages.join(", ")}</p>
        </div>
        <div class="tarjeta">
          <h3>Region</h3>
        <p>${datos.region}</p>
        </div>
        <div class="tarjeta">
          <h3>Zona Horaria</h3>
        <p>${datos.timeZone}</p>
        </div>
      </div>
      
    `;
  })
  .catch(function (err) {
    cargando.style.display = "none";
    error.textContent = "No se pudo cargar la información. Intente más tarde.";
    console.log("Hubo un error:", err);
  });