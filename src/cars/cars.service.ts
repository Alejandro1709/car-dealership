import { v4 as uuid } from 'uuid';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
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
    let carDB = this.findById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException('Car is is not valid inside body');
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findById(id);

    console.log(car);

    this.cars = this.cars.filter((c) => c.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
