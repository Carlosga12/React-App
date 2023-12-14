import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar lógica de autenticación aquí
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <form>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
