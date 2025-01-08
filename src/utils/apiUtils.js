
export const handlerSendRequest = async () => {
    try {
      const response = await fetch('https://lucisbackexp.onrender.com/');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.text(); // Asumiendo que la respuesta es texto plano
      alert(data); // Aquí deberías recibir "Hola Mundo"
    } catch (error) {
      console.error('fetching error:', error);
    }
  };


  export const sendImageToBackend = async (base64Image) => {
    try {
      const response = await fetch('http://localhost:8000/img/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  