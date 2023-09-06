export interface SwaCallbackConfirm {
  value: boolean;
}

export type SwaCallbackFunction = (data: SwaCallbackConfirm) => void;
