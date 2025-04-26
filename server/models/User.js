import mongooes from "mongoose";


const UserSchema = new mongooes.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartItems: {type: Object, default: {} },
}, { minimize: false } )


const User = mongooes.model.user || mongooes.model( 'user', UserSchema )

export default User
