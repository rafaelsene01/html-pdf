import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import * as Joi from 'joi';

@JoiSchemaOptions({
  allowUnknown: false,
})
export class PDFDto {
  @JoiSchema(Joi.string().required())
  firstName: string;

  @JoiSchema(Joi.string().required())
  lastName: string;

  @JoiSchema(Joi.array())
  list: string[];
}
