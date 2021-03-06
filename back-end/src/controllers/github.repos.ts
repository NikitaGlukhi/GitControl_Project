import { Controller, Get, Req, Post, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { GithubReposService } from '../services/github.repos.service';
import { CreateRepoDto } from '../dto/create-repo.dto';
import { Repo } from '../interfaces/repo.interface';

@Controller('repos')
export class GithubRepos {
    constructor(private readonly repo: GithubReposService) {  }

    @Get('get-repository')
    async getRepo(
        @Req() req: Request,
        @Res() res: Response
    ) {
        let a = await this.repo.getRepo();
        console.log(a);
        return res.json(a);
    }

    @Get('get-repo-data')
    async getRepoData(
        @Req() req: Request,
        @Res() res: Response
    ) {
        let a = await this.repo.findAll();
        return res.json(a);
    }

    @Post('inset-into')
    async create(@Body() createRepoDto: CreateRepoDto) {
        this.repo.create(createRepoDto);
    }

    @Get('select')
    async findAll(): Promise<Repo[]> {
        return this.repo.findAll();
    }
}
