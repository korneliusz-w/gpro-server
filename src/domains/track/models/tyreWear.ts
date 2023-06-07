export enum TyreWearEnum {
  Low,
  Medium,
  High,
  VeryHigh
}

export type TyreWearType = keyof typeof TyreWearEnum;