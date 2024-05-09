// import bcrypt from 'bcrypt';
// import { model, models, Schema } from "mongoose";

// const UserSchema = new Schema({
//     email: {type: String, require: true, unique: true},
//     password: {
//         type: String, 
//         require: true, 
//         validate: pass => {
//             if(!pass?.length || pass.length < 5) {
//                 new Error('password must be at least 5 characters');    
//             }
//         },
//     },
// }, {timestamps: true} );

// // Hash password to database
// UserSchema.post('validate', function (user) {
//     const notHashPassword = user.password;
//     const salt = bcrypt.genSaltSync(10);
//     user.password = bcrypt.hashSync(notHashPassword, salt);
// })

// export const User = model?.User || model('User', UserSchema);

// //KH2ZvCyUEEtLiMe5

import bcrypt from 'bcrypt';
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {
        type: String, 
        require: true, 
        validate: {
            validator: function (pass) {
                return pass && pass.length >= 5;
            },
            message: 'Password must be at least 5 characters'
        }
    }
}, {timestamps: true} );

// Hash password to database
// UserSchema.post('validate', function (user) {
//     const notHashPassword = user.password;
//     const salt = bcrypt.genSaltSync(10);
//     user.password = bcrypt.hashSync(notHashPassword, salt);
// })

UserSchema.pre('save', async function (next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
});

// export const User = model?.User || model('User', UserSchema);
export const User = models.User || model('User', UserSchema);

//KH2ZvCyUEEtLiMe5