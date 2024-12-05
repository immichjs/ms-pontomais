import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	@Inject() private readonly userService: UserService;

	@Post()
	public async create(@Body() data: CreateUserDTO) {
		return this.userService.create(data);
	}
}
