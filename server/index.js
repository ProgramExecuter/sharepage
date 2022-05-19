import express from "express";

const app = express();

////////////////////////
///  Server Setup   ///
//////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Listening at PORT ${PORT}`);
  }
});
