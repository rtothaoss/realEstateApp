import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard';
import { SaveSearchDto } from './dto';
import { SearchService } from './search.service';

@UseGuards(JwtGuard)
@Controller('savedsearches')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  getSavedSearches(@GetUser('id') userId: number) {
    return this.searchService.getSearch(userId);
  }

  @Post()
  addSavedSearch(@GetUser('id') userId: number, @Body() dto: SaveSearchDto) {
    console.log(dto)
    return this.searchService.addSearch(userId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteHomeById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) searchId: number) {
    return this.searchService.deleteSearchById(userId, searchId);
  }
}
