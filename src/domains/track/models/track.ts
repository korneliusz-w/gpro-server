import { ApiProperty } from "@nestjs/swagger";
import { DownforceEnum, DownforceType } from "./downforce";
import { FuelConsumptionEnum, FuelConsumptionType } from "./fuelConsumption";
import { GripLevelEnum, GripLevelType } from "./gripLevel";
import { OvertakingEnum, OvertakingType } from "./overtaking";
import { SuspensionRigidityEnum, SuspensionRigidityType } from "./suspensionRigidity";
import { TyreWearEnum, TyreWearType } from "./tyreWear";

export class TrackDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  distance: number;

  @ApiProperty()
  laps: number;

  @ApiProperty()
  lapDistance: number;

  @ApiProperty()
  averageSpeed: number;

  @ApiProperty()
  numberOfCorners: number;

  @ApiProperty()
  outOfPits: number;

  @ApiProperty()
  power: number;

  @ApiProperty()
  handling: number;

  @ApiProperty()
  acceleration: number;

  @ApiProperty({enum: DownforceEnum })
  downforce: DownforceEnum;

  @ApiProperty({enum: OvertakingEnum })
  overtaking: OvertakingEnum;

  @ApiProperty({enum: SuspensionRigidityEnum })
  suspensionRigidity: SuspensionRigidityEnum;

  @ApiProperty({enum: FuelConsumptionEnum })
  fuelConsumption: FuelConsumptionEnum;

  @ApiProperty({enum: TyreWearEnum })
  tyreWear: TyreWearEnum;

  @ApiProperty({enum: GripLevelEnum })
  gripLevel: GripLevelEnum;

  @ApiProperty()
  id?: number | null  
}