import { TyreType } from "./tyre";

export interface CarSetup {
  frontWing: number;
  rearWing: number;
  engine: number;
  brakes: number;
  gear: number;
  suspension: number;
  tyres: TyreType;
}