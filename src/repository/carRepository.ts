import db from "../config/database.js";

async function getCars() {

 const data = await db.cars.findMany({take:10})

  return data;
}

async function getCar(id: number) {
  const data = await db.cars.findFirst({
    where:{
      id
    }
  })
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
const data = await db.cars.findMany({
  where:{
    licensePlate
  }
})
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
   await db.cars.create({
    data:{
      model,
      licensePlate,
      year:year.toString(),
      color
    }
  })
}

async function deleteCar(id: number) {
  await db.cars.delete({
    where:{
      id
    }
  })
  
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;