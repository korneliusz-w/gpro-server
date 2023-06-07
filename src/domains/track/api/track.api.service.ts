import { Injectable } from "@nestjs/common";
import { TrackDto } from "../models/track";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TrackApiService {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) {
        console.log(this.configService.get('database.url'))
    }

    create(dto: TrackDto): Observable<AxiosResponse<TrackDto>> {
        return this.httpService.post('http://localhost:3001/track', dto);
    }

    findAll(): Observable<AxiosResponse<TrackDto[]>> {
        return this.httpService.get('http://localhost:3001/track');
    }
}