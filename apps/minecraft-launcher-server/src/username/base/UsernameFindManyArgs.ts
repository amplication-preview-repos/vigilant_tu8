/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsernameWhereInput } from "./UsernameWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UsernameOrderByInput } from "./UsernameOrderByInput";

@ArgsType()
class UsernameFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UsernameWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UsernameWhereInput, { nullable: true })
  @Type(() => UsernameWhereInput)
  where?: UsernameWhereInput;

  @ApiProperty({
    required: false,
    type: [UsernameOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UsernameOrderByInput], { nullable: true })
  @Type(() => UsernameOrderByInput)
  orderBy?: Array<UsernameOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UsernameFindManyArgs as UsernameFindManyArgs };