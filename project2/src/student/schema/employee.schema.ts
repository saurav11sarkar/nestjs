import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile' })
  profile: MongooseSchema.Types.ObjectId;

  @Prop()
  position: string;

  @Prop()
  salary: number;
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
