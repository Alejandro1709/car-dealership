import { v4 as uuid } from 'uuid';

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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

  create(createCardDto: CreateCarDto) {
    const car = {
      id: uuid(),
      ...createCardDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return updateCarDto;
  }
}
