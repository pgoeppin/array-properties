/* ARRAY DE DATOS */

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

/* DECLARANDO DOMS */

const propiedades = document.querySelector(".propiedades");
const btnFilter = document.querySelector("#btnSearch");
const nRooms = document.querySelector("#numRooms");
const minMts = document.querySelector("#minMeters");
const maxMts = document.querySelector("#maxMeters");
const nProp = document.querySelector("#total-prop");

/* CREANDO LA FUNCION TEMPLATE PARA LAS CARDS */

const createCard = (img, title, meters, rooms, description) => {
    return `
    <div class="card propiedad">
        <img src=${img} class="card-img-top img" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <div class="d-flex justify-content-between">
            <p class="card-text">Cuartos: ${rooms}</p>
            <p class="card-text">Metros: ${meters}</p>
            </div>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-info">Ver mas</a>
        </div>
    </div>
    `
};

/* MOSTRANDO EL TOTAL DE PROPIEDADES */

const totalProp = propiedadesJSON.length
nProp.innerHTML = `${totalProp}`

/* CREANDO LAS CARDS DE LAS PROPIEDADES (antes de aplicar cualquier filtro) UTILIZANDO LA FUNCION createCard() */
propiedades.innerHTML = '';
for (const item of propiedadesJSON) {
    propiedades.innerHTML += createCard(item.src, item.name, item.m, item.rooms, item.description)};

/* FUNCION DE BUSQUEDA Y FILTRO*/

const getSearchData = (numRooms, minMtsSearch, maxMtsSearch) => {
  if (numRooms.value == '' || minMtsSearch.value == '' || maxMtsSearch.value == '') {
      alert("Falta ingresar datos")
  } else if (Number(minMtsSearch.value) > Number(maxMtsSearch.value)) {
      alert("Los metros mínimos ingresados son mayores a los metros máximos")
  } else {
      const propFiltered = propiedadesJSON.filter(
          ({rooms, m}) => rooms >= Number(numRooms.value) && m >= Number(minMtsSearch.value) && m <= Number(maxMtsSearch.value)
      );
      propiedades.innerHTML = '';
      for (const item of propFiltered) {
          propiedades.innerHTML += createCard(item.src, item.name, item.m, item.rooms, item.description)
      };
      searchTotal = propFiltered.length
      nProp.innerHTML = `${searchTotal}`
  }
};

/* EVENTO AL HACER CLICK EN EL BOTON LLAMANDO A LA FUNCION DE BUSQUEDA */

btnFilter.addEventListener('click', () => {
  getSearchData(nRooms, minMts, maxMts)
});