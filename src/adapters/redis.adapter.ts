import { ConfigService } from '@nestjs/config';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { ServerOptions } from 'socket.io';

export class RedisIoAdapter extends IoAdapter {
  private redisAdapter: any;

  constructor(app, private readonly config: ConfigService) {
    super(app);
    const pubClient = createClient({
      url: this.config.get('REDIS_ADAPTER_URL'),
    });
    const subClient = pubClient.duplicate();
    this.redisAdapter = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.redisAdapter);
    return server;
  }
}
