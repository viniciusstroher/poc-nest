import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class UserSchemaMongoose extends Document {
	@Prop({ type: String, required: true })
	id

	@Prop({ type: String, required: true })
	email

	@Prop({ type: String, required: true })
	name

	@Prop({ type: String, required: false })
	token

	@Prop({ type: String, required: true })
	created_at

	@Prop({ type: String, required: false })
	deleted_at
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaMongoose)