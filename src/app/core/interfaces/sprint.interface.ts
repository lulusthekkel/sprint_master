export interface Sprint {
  id?:string;
  name: string;
  goal: string;
  startdate:Date;
  enddate: Date;
  target: number;
  stories?:string;
}
   