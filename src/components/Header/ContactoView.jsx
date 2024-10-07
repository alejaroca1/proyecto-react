import React from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {

  const UserForm = (event) => {
    event.preventDefault();

    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado con éxito!',
      text: 'Le estaremos respondiendo a la brevedad.',
      width: 580,
      padding: '1em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.3)',
      confirmButtonText: 'Salir'
    });

    event.target.reset();
  }

  return (
    <main>
      <hr />
      <br />
      <h2 style={{ fontFamily: 'monospace' }}>CONTACTO</h2>
      <div>
        <br />
        <form method="post" id="formulario" onSubmit={UserForm}>
          <fieldset>
            <legend>Completa el formulario de consulta</legend>
            <label className="entradas" htmlFor="nombre">Nombre:</label>
            <br />
            <input
              type="text"
              id="nombre"
              name="nombre"
              size="52"
              minLength="2"
              maxLength="30"
              autoComplete="nombre"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="apellido">Apellido:</label>
            <br />
            <input
              type="text"
              id="apellido"
              name="apellido"
              size="52"
              minLength="2"
              maxLength="30"
              autoComplete="apellido"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="mail"
              size="52"
              minLength="2"
              maxLength="30"
              autoComplete="email"
              required
            />
            <br /><br />
            <label className="entradas" htmlFor="comentario">Comentarios:</label>
            <br />
            <textarea
              name="comentario"
              id="comentario"
              cols="54"
              rows="8"
              required
              defaultValue=" Escribe tus consultas aquí!"
            />
          </fieldset>
          <br />
          <button type="submit" className="botonContacto" id="enviar">Enviar</button>
          <button type="reset" className="botonContacto">Reset</button>
        </form>
        <br /><br />
      </div>
    </main>
  );
}