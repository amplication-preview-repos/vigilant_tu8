/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsernameWhereInput } from "./UsernameWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UsernameListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UsernameWhereInput,
  })
  @ValidateNested()
  @Type(() => UsernameWhereInput)
  @IsOptional()
  @Field(() => UsernameWhereInput, {
    nullable: true,
  })
  every?: UsernameWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsernameWhereInput,
  })
  @ValidateNested()
  @Type(() => UsernameWhereInput)
  @IsOptional()
  @Field(() => UsernameWhereInput, {
    nullable: true,
  })
  some?: UsernameWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsernameWhereInput,
  })
  @ValidateNested()
  @Type(() => UsernameWhereInput)
  @IsOptional()
  @Field(() => UsernameWhereInput, {
    nullable: true,
  })
  none?: UsernameWhereInput;
}
export { UsernameListRelationFilter as UsernameListRelationFilter };
