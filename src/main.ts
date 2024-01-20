import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as ip from 'ip';

const servicePort = 4000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    cors: true,
  });

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('nest入门接口标题')
    .setDescription('使用nest书写的常用性接口') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    .setLicense('MIT 百度', 'https://www.baidu.com/')
    .setExternalDoc('扩展文档', 'https://www.baidu.com/')
    .addTag('学习练手项目') // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
    // .setBasePath('http://localhost:5000')
    /*.addGlobalParameters({
      name: 'tenantId',
      in: 'header',
      example: 10001,
    })*/
    .build();

  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  SwaggerModule.setup('/api-doc', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // app.useGlobalFilters(new HttpExceptionFilterFilter(new Logger()));
  await app.listen(servicePort, () => {
    console.log(`http://${ip.address()}:${servicePort}`);
    console.log(`http://127.0.0.1:${servicePort}/api-doc`);
  });
}

bootstrap();
