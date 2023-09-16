

function sales() {
  let presio = document.getElementById("presio_sales").value;
  let descripcion = document.getElementById("descripcion_sales").value;
  let lugar = document.getElementById("ubicacion_sales").value;
  let hoy = new Date();
  let id = hoy.getDate() + '' + hoy.getSeconds() + '' + hoy.getMilliseconds();

  let datos_sales = {
    "id": id,
    "descripcion": descripcion,
    "presio": presio,
    "lugar": lugar,
  };

  const json = JSON.stringify(datos_sales);

  window.localStorage.setItem('myStorage', JSON.stringify(json));

  alert(JSON.stringify(datos_sales))



}

function work() {
  let vacante = document.getElementById("nombre_vacante").value;
  let descripcion = document.getElementById("descripcion_vacante").value;
  let lugar = document.getElementById("ubicacion_vacante").value
  let img = document.getElementById("work_image");
}