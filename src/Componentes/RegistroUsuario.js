import React, { useState } from 'react';
import styles from '../App.css'; // Importa tu archivo de estilos CSS como un módulo

const RegistroUsuario = () => {
  // Definimos los estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend
    // por ejemplo, utilizando fetch o axios
    console.log('Datos del formulario:', { nombre, apellido, email, contrasena });
    // Limpia el formulario después del envío
    setNombre('');
    setApellido('');
    setEmail('');
    setContrasena('');
  };

  return (
    <div className={styles.registroContainer}> {/* Usa la clase del módulo de estilos */}
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}> {/* Usa la clase del módulo de estilos */}
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btnSubmit}>Registrarse</button> {/* Usa la clase del módulo de estilos */}
      </form>
    </div>
  );
}

export default RegistroUsuario;
