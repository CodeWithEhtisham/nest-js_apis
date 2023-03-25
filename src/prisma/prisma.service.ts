import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super(
            {
                datasources: {
                    db: {
                        url:"mysql://root:@localhost:3306/nestapi?connection_limit=5&socket_timeout=3"}
                },
            }
        );
    }
}
