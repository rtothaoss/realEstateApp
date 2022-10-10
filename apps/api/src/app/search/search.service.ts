import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaveSearchDto } from './dto';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  getSearch(userId: number) {
    return this.prisma.savedSearch.findMany({
      where: {
        userId,
      },
    });
  }

  async addSearch(userId: number, dto: SaveSearchDto) {
    const duplicate = await this.prisma.savedSearch.findFirst({
      where: {
        location: dto.location,
      },
    });

    if (!duplicate) {
      const savedSearch = await this.prisma.savedSearch.create({
        data: {
          userId,
          ...dto,
        },
      });

      return savedSearch;
    }

    return null;
  }

  async deleteSearchById(userId: number, searchId: number) {
    const search = await this.prisma.savedSearch.findUnique({
      where: {
        id: searchId,
      },
    });

    if (!search || search.userId !== userId) throw new ForbiddenException('Access to resources denied');

    const deletion = await this.prisma.savedSearch.delete({
      where: {
        id: searchId,
      },
    });
    
  }
}
