import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';

import { v4 as uuid } from 'uuid';
@Controller('pipes')
export class PipesController {
  //ParseIntPipe check pass id is integer or not if not integer throw error {"statusCode":400,"message":"Validation failed (numeric string is expected)","error":"Bad Request"}
  //The exception will prevent the body of the findById() method from executing
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
  }
  @Get('parse/:id')
  findParseById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    console.log(id);
    console.log(typeof id);
  }
  @Get()
  findQueryById(@Query('id', ParseIntPipe) id: number) {
    const idu = uuid();
    console.log(idu);
    console.log(id);
    console.log(typeof id);
  }
  //ParseuuidPipe
  @Get('parseuuid/:uuid21')
  findByuuid(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    console.log(uuid);
  }
}
