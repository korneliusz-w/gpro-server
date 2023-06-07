import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { TrackApiService } from "../api/track.api.service";
import { ApiBadRequestResponse, ApiTags } from "@nestjs/swagger";
import { TrackDto } from "../models/track";
import { DownforceEnum } from "../models/downforce";
import { OvertakingEnum } from "../models/overtaking";
import { SuspensionRigidityEnum } from "../models/suspensionRigidity";
import { FuelConsumptionEnum } from "../models/fuelConsumption";
import { TyreWearEnum } from "../models/tyreWear";
import { GripLevelEnum } from "../models/gripLevel";

@ApiTags('track')
@Controller('tracks')
export class TracksController {
    constructor(private trackApi: TrackApiService) {}

    @Post()
    @ApiBadRequestResponse()
    create(@Body() createTrackDto: TrackDto): void {
      if (
        createTrackDto.downforce in DownforceEnum &&
        createTrackDto.overtaking in OvertakingEnum &&
        createTrackDto.suspensionRigidity in SuspensionRigidityEnum &&
        createTrackDto.fuelConsumption in FuelConsumptionEnum &&
        createTrackDto.tyreWear in TyreWearEnum &&
        createTrackDto.gripLevel in GripLevelEnum        
      ) {
        this.trackApi.create(createTrackDto).subscribe();
      }
      else {
        throw new BadRequestException('Bad track settings');
      }
    }

    @Get()
    findAll(): void {
      this.trackApi.findAll().subscribe()
    }
  }