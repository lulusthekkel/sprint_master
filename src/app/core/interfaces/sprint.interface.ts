export interface Sprint {
  id:string;
  name: string;
  goal: string;
  startdate:Date;
  enddate: Date;
  target: number;
  total: number;
  stories:string[];
}
   