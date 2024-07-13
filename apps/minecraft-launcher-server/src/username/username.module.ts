import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsernameModuleBase } from "./base/username.module.base";
import { UsernameService } from "./username.service";
import { UsernameController } from "./username.controller";
import { UsernameResolver } from "./username.resolver";

@Module({
  imports: [UsernameModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsernameController],
  providers: [UsernameService, UsernameResolver],
  exports: [UsernameService],
})
export class UsernameModule {}
