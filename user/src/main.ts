import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: ['amqp://guest:guest@localhost:5672/pontomais'],
				queue: 'user_queue',
				queueOptions: {
					durable: false,
				},
			},
		},
	);

	app.listen();
}
bootstrap();
