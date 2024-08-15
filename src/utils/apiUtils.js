
export const handlerSendRequest = async () => {
    try {
      const response = await fetch('https://lucisbackexp.onrender.com/');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.text(); // Asumiendo que la respuesta es texto plano
      alert(data); // Aquí deberías recibir "Hola Mundo"
    } catch (error) {
      console.error('Hubo un problema con la operación fetch:', error);
    }
  };
