import { v4 as uuidv4 } from 'uuid';

export class Event {
  public _id: string;
  public readonly createdAt: Date;

  constructor(public description: string, public dateTime: string) {
    this._id = uuidv4();
    this.createdAt = new Date();
  }
}
