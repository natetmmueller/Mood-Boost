// Middleware for user to check

// Middleware for user to check.
module.exports = (req, res, next) => {
  // const token = req.header("x-auth-token");
  var authorizationToken = req.header("Authorization");
  console.log(authorizationToken);
  authorizationToken = authorizationToken.replace("Bearer ", "");
  const token = authorizationToken;

  if (!token) {
    return res
      .json({
        message: "Aha! You're not allowed to view this!",
      })
      .status(401);
  }
  try {
    const decoded = jwt.verify(token, process.env.secret);
  } catch (error) {
    return res.json({
      message: "Your token is invaild",
    });
  }
  catch(error){
    return res.json({
        "message":"Your token is invaild"
    });
}

  if (!req.user) {
    res.redirect("/auth/signin");
  } else {
    next();
  }
  
};
