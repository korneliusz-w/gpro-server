export enum TyreEnum {
    ExtraSoft,
    Soft,
    Medium,
    Hard,
    Rain
  }
  
  export type TyreType = keyof typeof TyreEnum;