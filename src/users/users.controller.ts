import { Controller, Get, Param, Post, Req, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { UsersService } from './users.service';
import { Readable } from 'stream';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ){}
    
    @Post('/upload')
    @UseInterceptors(FileInterceptor('avatar'))
    async uploadAvatar(@UploadedFile() file: Express.Multer.File){
        return this.userService.uploadAvatar(file.buffer)
    }

    @Get('/:id')
    async getUserAvatar(@Param('id') _id: string, @Res({passthrough: true}) res: Response){
        const file = await this.userService.getUserAvatar(_id, res)

        res.set({
            'Content-Disposition': 'inline',
            'Content-Type': 'image/png'
          })
       
        return new StreamableFile(file.avatar)
    }
}
