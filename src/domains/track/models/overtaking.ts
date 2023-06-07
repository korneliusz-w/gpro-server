export enum OvertakingEnum {
  VeryLow,
  Low,
  Normal,
  Hard
}

export type OvertakingType = keyof typeof OvertakingEnum;