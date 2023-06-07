export enum SuspensionRigidityEnum {
  Soft,
  Medium,
  Hard
}

export type SuspensionRigidityType = keyof typeof SuspensionRigidityEnum;