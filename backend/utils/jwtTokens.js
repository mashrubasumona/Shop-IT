//Create and Send Token

const sendToken = (user, statuscode, res) => {
  //Create JWT Token

  const token = user.getJwtToken();

  //options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statuscode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;