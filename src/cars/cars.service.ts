import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const foundCar = this.cars.find((c) => c.id === id);

    if (!foundCar) {
      throw new NotFoundException('This car doesnt exists');
    }

    return foundCar;
  }
}
