import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsernameService } from "./username.service";
import { UsernameControllerBase } from "./base/username.controller.base";

@swagger.ApiTags("usernames")
@common.Controller("usernames")
export class UsernameController extends UsernameControllerBase {
  constructor(
    protected readonly service: UsernameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
