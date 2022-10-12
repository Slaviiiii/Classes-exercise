function autoEngineeringCompany(arr) {
  let carObj = {};

  for (let car of arr) {
    let [carBrand, carModel, producedCars] = car.split(' | ');
    producedCars = Number(producedCars);
    if (!carObj.hasOwnProperty(carBrand)) {
      carObj[carBrand] = {};
      carObj[carBrand][carModel] = 0;
      carObj[carBrand][carModel] += producedCars;
    } else {
      if (!carObj[carBrand].hasOwnProperty(carModel)) {
        carObj[carBrand][carModel] = 0;
        carObj[carBrand][carModel] += producedCars;
      } else {
        carObj[carBrand][carModel] += producedCars;
      }
    }
  }
  let entries = Object.entries(carObj);

  for (let [brand, brandInfo] of entries) {
    console.log(brand);
    for (let [model, producedCars] of Object.entries(brandInfo)) {
      console.log(`###${model} -> ${producedCars}`);
    }
  }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10'])