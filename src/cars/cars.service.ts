import { v4 as uuid } from 'uuid';

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const foundCar = this.cars.find((c) => c.id === id);

    if (!foundCar) throw new NotFoundException(`Car with id '${id}' not found`);

    return foundCar;
  }
}
