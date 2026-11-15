const url = "https://api-colombia.com/api/v1/President";

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
    cargando.style.display = "none";

    datos.sort(function (a, b) {
      return b.startPeriodDate.localeCompare(a.startPeriodDate);
    });

    const fotosNuevas = {
      4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_x5_pYvt9kFAgJX4kwgtMyZg5-iGkvVYzjpwilFw2A&s=10",
      9: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aGPI29kpjfBkaokwX8O1zgwb6GoBgVFJsVd5eG27YA&s=10",
      14: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuT2xj82pG4mRffnuWgbGpv7gNX3o3C63KP6WPs-Lfwg&s=10",
      17: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuYY4kpXFC8MH4CzAEkmvpQlbhK-xc1lu0gFJL_NwXw&s=10",
      21: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ddfcu1G19LyQmf5iBj14u29Es2X35dH9WNvxD0Vd4g&s=10",
      22: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Enrique_Olaya_Herrera_1.jpg/250px-Enrique_Olaya_Herrera_1.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      23: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONXl4NcsRZd1vyaGMeJ-yVZIayEHUJkRk28zwNrKTKPShkiFfDz-XFYE&s=10",
      24: "https://www.ecured.cu/images/thumb/f/f7/Eduardo-santos-montejo.jpg/260px-Eduardo-santos-montejo.jpg",
      25: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONXl4NcsRZd1vyaGMeJ-yVZIayEHUJkRk28zwNrKTKPShkiFfDz-XFYE&s=10",
      26: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Dj_PNZSOOFU-rvE1C3JUwXx7jm_MTPFs-q8mdLzRiw&s=10",
      27: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS8kBFq1oC_S7G2iZfvWrNmwOKF5xs_MLT_aIebnWBg&s=10",
      28: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EReTM17e7Qa81qaP-aCV94Q_5KqPqaVQ11CxA6r8Ow&s",
      29: "https://img.lalr.co/cms/2018/03/13180613/Mariano-Ospina-Hernande2.jpg?r=1_1",
      30: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC2AvyQY_X6UOEA_CamsP3C4UkbAIVecFQLUSazaLOZBlzfIbUUDLre0&s=10",
      31: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyjfRF48_tbdns_Fe2iFDUlCgH80XQMwV2rI7emgzd07j1DNJLdmQYCCR&s=10",
      32: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXy3yrGRsBbycCFX2FKiA6GvodgLBHdipR3WCxmZPCwHZYxjV0tdLE5E&s=10",
      33: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAhS21zNBqnZxUh3sKlJfI2H1Qc8wgXDxZ_hM0fXzqggOMF7Ou2zcWJ8&s=10",
      34: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EReTM17e7Qa81qaP-aCV94Q_5KqPqaVQ11CxA6r8Ow&s",
      36: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGPWFeYVAuR470dkt2uSP9vzKL-z69CG4NE_EpgZFmA&s=10",
      37: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEW04EQ_NGVzHPnTFVkCb9bOPX-vA9rwQRjtw7DWPzAYDOnMwQzfibehg&s=10",
      38: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2K3tP3XBTvehORT_TVUq_-mUXVIHmGZ33_wh3ouS3g&s",
      39: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmdT__ylY9H54VIMPf5TdGQwkqjlmoJ0D7PgLAaVhyWcHHeVu0JlYjtCP&s=10",
      40: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONXl4NcsRZd1vyaGMeJ-yVZIayEHUJkRk28zwNrKTKPShkiFfDz-XFYE&s=10",
      41: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqH9jWpIryzlfYwy21sR8Drqbf37Oc375oaJLA3v60eg&s=10",
      42: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGwTVrjlUPy6Qd_LiKC8dvk_EULb6_SO5RY-J-qzeCw&s=10",
      44: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFdUn-rBIeXWy_AJvlApPibPhOzGhSjm0eT0YynOXuTX75yI5LD8Qcjo&s=10",
      45: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Virgilio_Barco_Vargas.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
      46: "https://upload.wikimedia.org/wikipedia/commons/d/d1/C%C3%A9sar_Gaviria.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
      47: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIvpKXRTLCbAjlXjWcYtHBkXGldde4lgGCNVd1ytrZNBL-2BTi4hujIY&s=10",
      48: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxsNb3QeFLxqxXZSU0IqgrdvlJdLH_4CU2FTOCw9hvA&s=10",
      49: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXH1BjqhtVTGgxBf0c0Fbw-NkH0_gKikF1XMcCiZgalRd-8WUSJ9tsWg&s=10",
      50: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bS6AvHkbvUfionrpMooKRvu3vU982XD5q2yMS8MDD_oXarRVIjP0jawt&s=10",
      51: "https://s3.amazonaws.com/rtvc-assets-senalmemoria.gov.co/s3fs-public/2022-07/180826_08_VotacionConsultaPopular%20%281%29.jpg",
      52: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Presidente_Gustavo_Petro_U.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
      53: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZSfcIrMr8Mj8jdkMoTmafYihem4kF1f67FVmVxqxxw&s",

    };

    let html = '<div class="tarjetas">';

    datos.forEach(function (presidente) {

      const inicio = presidente.startPeriodDate.substring(0, 4);

      let fin = "Actual";
      if (presidente.endPeriodDate) {
        fin = presidente.endPeriodDate.substring(0, 4);
      }

      let foto = presidente.image;
      if (fotosNuevas[presidente.id]) {
        foto = fotosNuevas[presidente.id];
      }

      html += `
        <div class="tarjeta">
          <img src="${foto}" alt="${presidente.name}" class="foto">
          <h3>${presidente.name} ${presidente.lastName}</h3>
          <p><strong>Periodo:</strong> ${inicio} - ${fin}</p>
          <p><strong>Partido:</strong> ${presidente.politicalParty} </p>

        </div>
      `;
    });

    html += "</div>";

    contenido.innerHTML = html;
  })
  .catch(function (err) {
    cargando.style.display = "none";
    error.textContent = "No se pudieron cargar los presidentes. Intente más tarde.";
    console.log("Hubo un error:", err);
  
  }); 

    