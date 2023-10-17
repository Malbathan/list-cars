const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Não foi possível buscar os dados.");
    }
    return response.json();
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw error;
  }
};

export const fetchCars = async () => {
  const carsURL = "./src/utils/dataCars.json";
  // const carsURL = "https://wswork.com.br/cars.json";
  return fetchData(carsURL);
};

export const fetchBrands = async () => {
  const brandsURL = "./src/utils/dataCarsByBrand.json";
  // const brandsURL = "http://wswork.com.br/cars_by_brand.json";
  return fetchData(brandsURL);
};