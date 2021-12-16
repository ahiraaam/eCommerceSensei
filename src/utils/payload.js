// *cifrar la información
// payload es la info que mandamos por JWT
export default function getPayload() {
  const token = window.localStorage.getItem("token");
  if (token) {
    const [header, payload, signature] = token.split("."); //header.payload.signature

    //blindar payload, porque a veces un payload en base64 reemplaza
    // caracteres que nos pueden causar problemas
    // Es un cifrado...estamos recuperando el token
    // Este token ya viene en base64
    const base64 = payload.replace("-", "+").replace("_", "/");

    // atob convierte base64 a string y ese texto es el resultado que se
    // convierte a objeto en formato JSON
    const payloadObject = JSON.parse(window.atob(base64));
    return payloadObject;
  } else {
    return null;
  }
}

// RECUPERANDO EL TOKEN, LO QUE NOS INTERESA ES EL PAYLOAD
// PRIMERO SACAMOS EL PAYLOAD Y DESPUES LO PASAMOS A STRING
// A VECES CUANDO SE SACA EL PAYLOAD CAMBIA UNOS POR OTROS, ES MAS POR SEGURIDAD
