import { Module } from '@nestjs/common';
import { AuthModule } from './features/auth/auth.module';
import { TimeTrackingModule } from './features/time-tracking/time-tracking.module';
import { UserModule } from './features/user/user.module';

@Module({
	imports: [UserModule, AuthModule, TimeTrackingModule],
})
export class AppModule {}
