/**
 * Created by plter on 2016/11/8.
 */

module.exports = {

    STATE_SUCCESS: 1,
    MESSAGE_SUCCESS: "success",
    STATE_NO_USER_NAME_INPUT: 10001,
    MESSAGE_NO_USER_NAME_INPUT: "No user name input",
    STATE_NO_AGE_INPUT: 10002,
    MESSAGE_NO_AGE_INPUT: "No age input",
    STATE_UNKNOWN_ERROR: 10000,
    MESSAGE_UNKNOWN_ERROR: "Unknown error",
    STATE_NO_USER_ID_INPUT: 10003,
    MESSAGE_NO_USER_ID_INPUT: "No user id input",

    makeResponse: function (statusCode, message) {
        return {state: statusCode, message: message};
    }

};