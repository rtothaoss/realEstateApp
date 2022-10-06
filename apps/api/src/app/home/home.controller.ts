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
import { SaveHomeDto } from './dto';
import { HomeService } from './home.service';

@UseGuards(JwtGuard)
@Controller('savedhomes')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get()
  getSavedHomes(@GetUser('id') userId: number) {
    return this.homeService.getHomes(userId);
  }

  @Post()
  addSavedHome(@GetUser('id') userId: number, @Body() dto: SaveHomeDto) {
    return this.homeService.addHome(userId, dto);
  }
}
