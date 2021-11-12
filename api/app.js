const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//if you use this route, instead of going to the path itself, go to this path[__dirname+fouder_name]
//this prevent of going to "localhost://8800/images"
app.use("/images", express.static(path.join(__dirname, "/public/images")));
// mongoose.set("useFindAndModify", false);

//MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null,req.body.name);
  },
});
// req.body.name
const upload = multer({ storage: storage });  

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully.");
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => console.log("backend server is running!"));
