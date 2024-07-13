import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsernameServiceBase } from "./base/username.service.base";

@Injectable()
export class UsernameService extends UsernameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
