import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength, NotContains, ValidateNested } from "class-validator";
import { InputType, Field } from '@nestjs/graphql';

import { Type } from "class-transformer";
@InputType()
export class RegisterUserDto {
    @Field()
    @ApiProperty({
        description: "Name",
        nullable: false,
        required: true,
        type: "string",
        example: "John Sample",
    })
    @IsString()
    @MinLength(3)
    name: string;

    @Field()
    @ApiProperty({
        description: "Email",
        uniqueItems: true,
        nullable: false,
        required: true,
        type: "string",
        example: "youremail@example.com",
    })
    @IsEmail()
    email: string;
    
    @Field()
    @ApiProperty({
        description: "Password: Min 6 characters, 1 uppercase, 1 lowercase and 1 number",
        nullable: false,
        required: true,
        type: "string",
        example: "Password123",
    })
    @IsString()
    @MinLength(6)
    @MaxLength(16)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message: 'Password must contain at least one uppercase, one lowercase and one number',
    })
    @NotContains(' ', { message: 'El password no debe contener espacios' }) 
    password: string;
    
    @Field()
    @ApiProperty({
        description: "Confirm Password, it must be the same as the password",
        nullable: false,
        required: true,
        type: "string",
        example: "Password123",
    })
    @IsString()
    
    passwordconf: string;
    
 
   
    
   
      
}
