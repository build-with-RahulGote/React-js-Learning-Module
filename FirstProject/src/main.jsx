import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

let cssProp = {
  backgroundColor: 'red',
  color: 'white',
};



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Fragment>
      <input type="text" name="username" placeholder="Username" /><br /><br />
      <input type="password" name="password" placeholder="Password" /><br /><br />
      <input type="button" style={cssProp} name="login" value="Login" />
      <h1>Hello World</h1>
    </React.Fragment>
  </StrictMode>
);
