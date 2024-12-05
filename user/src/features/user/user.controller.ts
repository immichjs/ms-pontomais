import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
	@Inject() private readonly userService: UserService;

	@MessagePattern('user.create')
	public async create(@Payload() data: CreateUserDTO) {
		return this.userService.create(data);
	}
}
