import { Serie } from './serie.js';

import { series } from './dataSeries.js';
const coursesTbody: HTMLElement = document.getElementById('peliculas')!; // Nodo tbody que tiene el id="courses"

function renderPeliculasInTable(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.setAttribute("id","columnasTabla")
    trElement.innerHTML = `<td">${s.id}</td>
                           <td id=${s.id} style="color: #2f3cec">${s.titulo}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
                           
    coursesTbody.appendChild(trElement);
  });
}

function promedioTemporadaSeries(series: Serie[]): void {
   
    var suma: number =0;
    const parrafo: HTMLElement = document.getElementById('col1')!; // Nodo tbody que tiene el id="courses"

    series.forEach(s => {
        suma = suma + s.temporadas
    })

    suma = suma/series.length;
    let pElement= document.createElement("p")
    pElement.innerHTML =`Cantidad de temporadas promedio: ${suma}`;

    parrafo.appendChild(pElement);

}


 

function informacionSerie(event:MouseEvent, serie: Serie): void {
    const titulo: HTMLElement = document.getElementById('tituloSerie')!; // Nodo tbody que tiene el id="courses"
    const descripcion: HTMLElement = document.getElementById('descripcionSerie')!; // Nodo tbody que tiene el id="courses"
    const link: HTMLElement = document.getElementById('linkSerie')!; // Nodo tbody que tiene el id="courses"
    const info: HTMLElement = document.getElementById('informacion')!; // Nodo tbody que tiene el id="courses"
    const imagen: HTMLElement = document.getElementById('imagen')!; // Nodo tbody que tiene el id="courses"

    imagen.setAttribute("src",serie.media);
    titulo.innerHTML=serie.titulo;
    descripcion.innerHTML = serie.resumen;
    link.innerText=serie.link;
    link.setAttribute("href",serie.link);
    info.style.visibility= "visible"; 
}


function agregarListener(series: Serie[]): void {
    var i: number =0;
    series.forEach(s => {
        const parrafo: HTMLElement = document.getElementById(`${s.id}`)!;
        parrafo.addEventListener("click", function(event){ informacionSerie(event, s); });

    })
}




renderPeliculasInTable(series);
promedioTemporadaSeries(series);
agregarListener(series);

