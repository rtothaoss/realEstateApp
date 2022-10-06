import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaveHomeDto } from './dto';

@Injectable() 
export class HomeService {
    constructor(private prisma: PrismaService){}

    getHomes(userId: number) {
        return this.prisma.savedHome.findMany({
            where: {
                userId,
            }
        })
    }

    async addHome(userId: number, dto: SaveHomeDto) {
        const savedHome = await this.prisma.savedHome.create({
            data: {
                userId,
                ...dto
            }
        })
        return savedHome;
    }

}