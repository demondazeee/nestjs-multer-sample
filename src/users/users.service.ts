import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/Users';
import sharp from 'sharp';
import { Response } from 'express';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private userRepo: Repository<Users>
    ){}

    async uploadAvatar(file: Buffer){
        const buffer = await sharp(file).png().toBuffer()
        const user = this.userRepo.create({
            avatar: buffer
        })

        try{
            return await this.userRepo.save(user)
        } catch(e){
            throw new Error(e)
        }
    }

    async getUserAvatar(_id: string, res: Response){
        
        const user = await this.userRepo.findOne({_id})
    
            if (!user || !user.avatar) {
                throw new Error()
            }
            return user
        return user
    }
}
