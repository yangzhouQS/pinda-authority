import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from './module/dto/user.dto';

@ApiTags('当前项目默认路由')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    description: '请求测试',
    summary: '请求测试接口',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: '获取用户信息列表',
  })
  @Get('getUser')
  getUser(): UserDto[] {
    return [{ id: 1, name: '李四', age: 16 }];
  }
}
