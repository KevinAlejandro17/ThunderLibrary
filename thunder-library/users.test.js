const { createClient } = require("@supabase/supabase-js");

// Configurar el cliente de Supabase

const supabase = createClient(
  "https://vabfjlxneqrtfkejwlnc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhYmZqbHhuZXFydGZrZWp3bG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2OTY0MzQsImV4cCI6MTk5ODI3MjQzNH0.eGQMG8TqQkfuIIx0poVMQM1K6gnVJOiPBcAy-zY7glQ"
);

test("Prueba de conexión a Supabase", () => {
  // Realizar una prueba de conexión a Supabase
  expect(supabase).toBeTruthy();
});

test("Prueba de Registro de usuario con Supabase", async () => {
  // Datos del usuario para el registro
  const signup_user = {
    email: "prueba22@correo.dot",
    password: "esunsecreto",
    options: {
      data: {
        full_name: "Kevin Abadia",
        phone: "32380110931",
        address: "Carrera 1",
        role: "Customer",
      },
    },
  };

  // Autenticar un usuario
  const { data, error } = await supabase.auth.signUp(signup_user);

  //const { response } = await supabase.from("users").insert({ nickname, full_name, email });

  // Verificar el resultado de la operación
  expect(data.user).toBeDefined();
  expect(data.session).toBeTruthy();
  expect(error).toBeNull();
});

test("Prueba de autenticación de usuario con Supabase", async () => {
  // Datos de autenticación
  const login_user = {
    email: "prueba22@correo.dot",
    password: "esunsecreto",
  };

  // Autenticar un usuario
  const { data, error } = await supabase.auth.signInWithPassword(login_user);

  // Realizar una prueba de autenticación exitosa
  expect(data.user).toBeDefined();
  expect(data.session).toBeTruthy();
  expect(error).toBeNull();
});

test("Prueba de actualizar de usuario con Supabase", async () => {
  // Datos de actualizacion
  const address = "Carrera 2";
  const name = "andres ortega";
  const email = "prueba22@correo.dot";

  // Actualizar un usuario
  const { data, error } = await supabase
    .from("users")
    .update({ address: address, full_name: name })
    .eq("email", email);

  expect(error).toBeNull();
});
