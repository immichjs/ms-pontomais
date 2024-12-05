import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
	@InjectRepository(User) private readonly userRepository: Repository<User>;

	public async create(data: CreateUserDTO) {
		const userExists = await this.userRepository.findOne({
			where: {
				email: data.email,
			},
		});

		if (userExists) {
			return new RpcException({
				statusCode: 409,
				message: 'User already exists',
			});
		}

		const user = this.userRepository.create(data);
		return this.userRepository.save(user);
	}
}
