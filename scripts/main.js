import { series } from './dataSeries.js';
var coursesTbody = document.getElementById('peliculas'); // Nodo tbody que tiene el id="courses"
function renderPeliculasInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", "columnasTabla");
        trElement.innerHTML = "<td\">".concat(s.id, "</td>\n                           <td id=").concat(s.id, " style=\"color: #2f3cec\">").concat(s.titulo, "</td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function promedioTemporadaSeries(series) {
    var suma = 0;
    var parrafo = document.getElementById('col1'); // Nodo tbody que tiene el id="courses"
    series.forEach(function (s) {
        suma = suma + s.temporadas;
    });
    suma = suma / series.length;
    var pElement = document.createElement("p");
    pElement.innerHTML = "Cantidad de temporadas promedio: ".concat(suma);
    parrafo.appendChild(pElement);
}
function informacionSerie(event, serie) {
    var titulo = document.getElementById('tituloSerie'); // Nodo tbody que tiene el id="courses"
    var descripcion = document.getElementById('descripcionSerie'); // Nodo tbody que tiene el id="courses"
    var link = document.getElementById('linkSerie'); // Nodo tbody que tiene el id="courses"
    var info = document.getElementById('informacion'); // Nodo tbody que tiene el id="courses"
    var imagen = document.getElementById('imagen'); // Nodo tbody que tiene el id="courses"
    imagen.setAttribute("src", serie.media);
    titulo.innerHTML = serie.titulo;
    descripcion.innerHTML = serie.resumen;
    link.innerText = serie.link;
    link.setAttribute("href", serie.link);
    info.style.visibility = "visible";
}
function agregarListener(series) {
    var i = 0;
    series.forEach(function (s) {
        var parrafo = document.getElementById("".concat(s.id));
        parrafo.addEventListener("click", function (event) { informacionSerie(event, s); });
    });
}
renderPeliculasInTable(series);
promedioTemporadaSeries(series);
agregarListener(series);
