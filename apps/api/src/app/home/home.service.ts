import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaveHomeDto } from './dto';

@Injectable()
export class HomeService {
  constructor(private prisma: PrismaService) {}

  getHomes(userId: number) {
    return this.prisma.savedHome.findMany({
      where: {
        userId,
      },
    });
  }

  getHomeByPropertyId(userId: number, propertyId: string) {
    return this.prisma.savedHome.findFirst({
      where: {
        propertyId,
        userId
      }
    })
  }

  async addHome(userId: number, dto: SaveHomeDto) {
    
    const savedHome = await this.prisma.savedHome.create({
      data: {
        userId,
        ...dto
      },
    });
    return savedHome;
  }

  async deleteHomeById(userId: number, propertyId: string) {
    const home = await this.prisma.savedHome.findFirst({
      where: {
        propertyId: propertyId
      },
    });

    if (!home || home.userId !== userId) throw new ForbiddenException('Access to resources denied');

    await this.prisma.savedHome.delete({
      where: {
        id: home.id,
      },
    });
  }
}
