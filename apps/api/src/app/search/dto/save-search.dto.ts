import { IsNotEmpty, IsString, } from "class-validator";

export class SaveSearchDto {
    @IsString()
    @IsNotEmpty()
    location: string;
}