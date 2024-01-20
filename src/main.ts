import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as ip from 'ip';
import { ValidationPipe } from '@nestjs/common';
const servicePort = 4000;

const apiDocumentationCredentials = {
  name: 'admin',
  pass: 'admin',
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    cors: true,
  });

  const httpAdapter = app.getHttpAdapter();
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // 钩子侦听器消耗系统资源，因此默认情况下禁用它们。要使用关闭钩子，您必须通过调用enableShutdownHooks()来启用侦听器：
  app.enableShutdownHooks();

  httpAdapter.use('/api-docs', (req, res, next) => {
    function parseAuthHeader(input: string): { name: string; pass: string } {
      const [, encodedPart] = input.split(' ');
      const buff = Buffer.from(encodedPart, 'base64');
      const text = buff.toString('ascii');
      const [name, pass] = text.split(':');
      return { name, pass };
    }
    function unauthorizedResponse(): void {
      if (httpAdapter.getType() === 'fastify') {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic');
      } else {
        res.status(401);
        res.set('WWW-Authenticate', 'Basic');
      }
      next();
    }
    if (!req.headers.authorization) {
      return unauthorizedResponse();
    }
    const credentials = parseAuthHeader(req.headers.authorization);
    if (
      credentials?.name !== apiDocumentationCredentials.name ||
      credentials?.pass !== apiDocumentationCredentials.pass
    ) {
      return unauthorizedResponse();
    }
    next();
  });

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('nest入门接口标题')
    .setDescription('使用nest书写的常用性接口') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    .setContact('发送邮件给我', 'https://www.baidu.com/', '10001@qq.com')
    .setLicense('MIT 百度', 'https://www.baidu.com/')
    .setExternalDoc('扩展文档', 'https://www.baidu.com/')
    .addTag('练手项目', '测试的项目') // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
    // .setBasePath('http://localhost:5000')
    .addGlobalParameters({
      name: 'tenantId',
      in: 'header',
      example: 10086,
    })
    .build();

  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true,
  });
  // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  SwaggerModule.setup('/api-docs', app, document, {
    // 预授权替代方案, 如果设置为 true，它将保留授权数据，并且不会在浏览器关闭/刷新时丢失
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: '开发测试nest项目',
    useGlobalPrefix: true,
  });

  // app.useGlobalFilters(new HttpExceptionFilterFilter(new Logger()));
  await app.listen(servicePort, () => {
    console.log(`http://${ip.address()}:${servicePort}`);
    console.log(`http://127.0.0.1:${servicePort}/api-docs`);
  });
}

bootstrap();
