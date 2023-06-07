export enum GripLevelEnum {
  VeryLow,
  Low,
  Medium,
  High,
  VeryHigh
}

export type GripLevelType = keyof typeof GripLevelEnum;