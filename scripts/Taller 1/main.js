import { series } from './dataSeries.js';
var coursesTbody = document.getElementById('peliculas'); // Nodo tbody que tiene el id="courses"
function renderPeliculasInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td\">".concat(s.id, "</td>\n                           <td id=\"TituloPelicula\">").concat(s.titulo, "</td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
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
renderPeliculasInTable(series);
promedioTemporadaSeries(series);
