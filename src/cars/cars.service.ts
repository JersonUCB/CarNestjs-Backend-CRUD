import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Car} from "./entities/car.entity";
import {Repository} from "typeorm";

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository:Repository<Car>) {
  }
  create(createCarDto: CreateCarDto) { //EL ORM con esto se ocupa de hacer el insert
    return this.carRepository.save(createCarDto);
  }

  findAll() {
    return this.carRepository.find();
  }

  findOne(id: number) {
    return this.carRepository.findOneBy({id});
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.carRepository.update({id}, updateCarDto);
  }

  async remove(id: number) {
    await this.carRepository.delete(id);
  }
}
