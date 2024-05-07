export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': process.env.API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const responce = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const result = await responce.json();

  return result;
}
