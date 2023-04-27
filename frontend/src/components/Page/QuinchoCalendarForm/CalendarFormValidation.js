export function validate(data, eventsData) {
  console.log(data);
  const date = new Date();
  const todayDate =
    date.getFullYear() +
    '-' +
    '0' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate();
  const errors = {};
  const regexURL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const eventFiltered = eventsData.filter(
    (event) => event.date === data.date && event.beg_time === data.beg_time
  );
  console.log(eventFiltered);
  if (!data.client)
    errors.client = 'Se debe ingresar el Nombre del Solicitante';
  if (data.client && data.client.length < 4)
    errors.client = 'Longitud insuficiente';
  if (!data.email)
    errors.email = 'Se debe ingresar un Correo Electronico del Solicitante';
  if (data.email && !regexURL.test(data.email))
    errors.email = 'El Correo Electronico no es valido';
  if (!data.phone)
    errors.phone = 'Se debe ingresar el Numero de Telefono del Solicitante';
  if (data.phone.length > 1 && data.phone.length < 8)
    errors.phone = 'Longitud insuficiente';
  if (!data.date) errors.date = 'Se debe ingresar una Fecha';
  if (data.date < todayDate)
    errors.date = 'No se pueden realizar solicitudes en Fechas Pasadas';
  if (!data.beg_time)
    errors.beg_time = 'Se debe Ingresar un Horario para la Solicitud';
  if (eventFiltered.length > 0)
    errors.beg_time = 'Ya existe una solicitud para este horario';
  if (!data.description)
    errors.description = 'Se debe ingresar una Descripcion del Evento';

  return errors;
}
