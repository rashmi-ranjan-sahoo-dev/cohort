import mongoose, {model, Schema, Document} from 'mongoose'

interface User extends Document {
    email: string;
    password: string;
}

const UserSchema = new Schema<User>({
    email: { type: String, unique:true, required: true},
    password:  { type: String, required: true}
})

export const UsernModel = model<User>("User",UserSchema);

const ContentSchema = new Schema ({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const ContentModel = model("Content", ContentSchema);