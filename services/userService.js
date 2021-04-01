const mongoose = require('mongoose');
const User = require('../models/userModel');

function createUser(req, res) {
    return new Promise(function(resolve, reject) {
        const user = new User();
        user._id = new mongoose.Types.ObjectId(),
            user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.save()
            .then(result => {
                // console.log("Post Movie",result);
                const message = {
                    status: 200,
                    message: 'User Created Successfully',
                    post: {
                        _id: result._id,
                        firstName: result.firstName,
                        lastName: result.lastName

                    }
                }
                resolve(message);
            })
            .catch(err => {
                console.log(err);
                const error = {
                    status: 500,
                    message: 'Could not save User',
                    err: err.message
                }
                reject(error)
            })
    })
}

function getAllUsers(req, res) {
    return new Promise(function(resolve, reject) {
        User.find()
            .exec().then(result => {
                console.log("result", result);
                const message = {
                    status: 200,
                    message: 'Get All Users',
                    users: result
                }
                if (result && result.length > 0) {
                    resolve(message);
                } else {
                    const error = {
                        status: 500,
                        message: 'Could not get users',
                    }
                    reject(error);
                }

            })
            .catch(err => {
                console.log(err);
                const error = {
                    status: 500,
                    message: 'Could not get users',
                    err: err
                }
                reject(error);
            })
    })
}

function getUserById(id) {
    return new Promise(function(resolve, reject) {
        var mongId = mongoose.Types.ObjectId(id);
        User.find({ _id: mongId })
            .exec().then(result => {
                console.log("result", result);
                const message = {
                    status: 200,
                    message: 'Get All Users',
                    users: result
                }
                if (result && result.length > 0) {
                    resolve(message);
                } else {
                    const error = {
                        status: 500,
                        message: 'Could not get users',
                    }
                    reject(error);
                }

            })
            .catch(err => {
                console.log(err);
                const error = {
                    status: 500,
                    message: 'Could not get users',
                    err: err
                }
                reject(error);
            })
    })
}

function getAllFriends() {

}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getAllFriends: getAllFriends
}