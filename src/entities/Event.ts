import { v4 as uuidv4 } from 'uuid';

export class Event {
  public _id: string;
  constructor(
    public description: string,
    public dateTime: string,
    public createdAt: string
  ) {
    this._id = uuidv4();
  }
}
