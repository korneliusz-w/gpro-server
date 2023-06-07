export enum DownforceEnum {
  Low,
  Medium,
  High
}

export type DownforceType = keyof typeof DownforceEnum;