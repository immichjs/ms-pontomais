import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
	@Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy;

	public async create(data: CreateUserDTO) {
		return this.userServiceClient.send('user.create', data);
	}
}
