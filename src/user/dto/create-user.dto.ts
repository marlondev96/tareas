import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsOptional, IsString } from "class-validator";
import { InputType, Field } from '@nestjs/graphql';

import { RegisterUserDto } from "src/auth/dto/register-user.dto";

@InputType()
export class CreateUserDto extends RegisterUserDto {
    @Field()
    @ApiProperty({
        description: "User Role (admin, user)",
        default: "user",
        type: "string",
        example: "user",
    })
    @IsString()
    @IsOptional()
    role?: Role;

  

}
