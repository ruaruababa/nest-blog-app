export enum StatusEnum {
  Active = 1,
  Inactive = 0,
}

export type StatusType = {
  id: number | string;
  name?: StatusEnum;
};
