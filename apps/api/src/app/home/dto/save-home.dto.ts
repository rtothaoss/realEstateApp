import { IsNotEmpty, IsString, IsInt, IsNumber } from "class-validator";

export class SaveHomeDto {


    @IsInt()
    @IsNotEmpty()
    price: number

    @IsInt()
    @IsNotEmpty()
    beds: number

    @IsInt()
    @IsNotEmpty()
    bath: number

    @IsInt()
    @IsNotEmpty()
    sqft: number

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    type: string

    @IsInt()
    @IsNotEmpty()
    yearBuilt: number

    @IsString()
    @IsNotEmpty()
    heating: string

    @IsString()
    @IsNotEmpty()
    cooling: string

    @IsString()
    @IsNotEmpty()
    parking: string

    @IsInt()
    @IsNotEmpty()
    lot: number

    @IsString()
    @IsNotEmpty()
    image: string

    @IsString()
    @IsNotEmpty()
    propertyId: string
   
}