export enum FuelConsumptionEnum {
  VeryLow,
  Low,
  Medium,
  Hight,
  VeryHigh
}

export type FuelConsumptionType = keyof typeof FuelConsumptionEnum;