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
    const savedSearch = await this.prisma.savedSearch.create({
      data: {
        userId,
        ...dto,
      },
    });
    return savedSearch;
  }
}
