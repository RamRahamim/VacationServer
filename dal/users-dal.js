const connection = require('./connection-wrapper');

async function addUser(userRegistrationData) {
    let sql = `insert into users(user_name, password, user_type, first_name, last_name) ` +
        `values(?, ?, ?, ?, ?)`;
    let parameters = [userRegistrationData.userName, userRegistrationData.password,
    userRegistrationData.userType, userRegistrationData.firstName, userRegistrationData.lastName];
    await connection.executeWithParameters(sql, parameters);
}

async function isUserNameExist(username) {
    let sql = "SELECT id from users where user_name = ?";
    let parameters = [username];
    let users = await connection.executeWithParameters(sql, parameters);   
    
    if (users && users.length>0){
        return true;
    }
    return false; 
}

async function isUserNameExist(username) {
    let sql = "SELECT id from users where user_name = ?";
    let parameters = [username];
    let users = await connection.executeWithParameters(sql, parameters);   
    
    if (users && users.length>0){
        return true;
    }
    return false;
}

async function login(user) {
    let sql = `SELECT id, user_type as userType, first_name as firstName, last_name as lastName 
              from users where user_name = ? and password = ?`;
    let parameters = [user.userName, user.password];
    let [userData] = await connection.executeWithParameters(sql, parameters);   
    
    if (!userData){
        return null;
    }

    return userData;
}

module.exports = {
    addUser,
    isUserNameExist,
    login
};