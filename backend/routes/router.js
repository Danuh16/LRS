const express = require("express");
const router = express.Router();
const ParcelSchema = require("../models/parcelSchema");
const bcrypt = require("bcrypt");
const session = require("express-session");
const AppointmentSchema = require("../models/AppointmentSchema");
const UserSchema = require("../models/UserSchema");

// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

router.post("/parcel", async (req, res) => {
  const {
    fullName,
    area,
    currentCity,
    subCity,
    kebele,
    martialStatus,
    gender,
    registrationDate,
    parcelCode,
    landLevel,
    serviceType,
    northBoundary,
    southBoundary,
    eastBoundary,
    westBoundary,
    tenureType,
    encumbrance,
    occupation,
  } = req.body;

  const parcel = new ParcelSchema({
    fullName: fullName,
    area: area,
    currentCity: currentCity,
    subCity: subCity,
    kebele: kebele,
    martialStatus: martialStatus,
    gender: gender,
    registrationDate: registrationDate,
    parcelCode: parcelCode,
    landLevel: landLevel,
    serviceType: serviceType,
    northBoundary: northBoundary,
    southBoundary: southBoundary,
    eastBoundary: eastBoundary,
    westBoundary: westBoundary,
    tenureType: tenureType,
    encumbrance: encumbrance,
    occupation: occupation,
  });
  await parcel
    .save()
    .then(() => {
      res.status(201).json(parcel);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error registering parcel" });
    });
});

router.get("/searchUser", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const user = await UserSchema.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/search", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const parcel = await ParcelSchema.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    res.json(parcel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/createUser", async (req, res) => {
  const { fullName, phoneNumber, username, password,role } = req.body;
  console.log(req.body);
  try {
    let user = await UserSchema.findOne({
      username: username,
    });
    if (user) {
      throw new Error("User already exist");
    }
    const encryptPassword = await bcrypt.hash(password, 10);

    user = new UserSchema({
      fullName: fullName,
      phoneNumber: phoneNumber,
      username: username,
      password: encryptPassword,
      role:role,
    });
    console.log(user);
    await user.save();
    return res.status(200).send({
      message: "Registered successfully.",
    });
  } catch (err) {
    return res.status(201).send({
      message: `Failed to register. ${err.message}`,
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("logged",req.body);

  try {
    const user = await UserSchema.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //req.session.user = user;
    console.log({ message: "Login successful", user:user });
    return res.send({ message: "Login successful", user:user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout successful" });
});

router.get("/getAllCustomer", async (req, res) => {
  try {
    const allCustomer = await ParcelSchema.find({});
    res.send({ status: "ok", customerData: allCustomer });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await UserSchema.find({});
    res.send({ status: "ok", userData: allUser });
  } catch (error) {
    console.log(error);
  }
});

router.post("/deleteUser", async (req, res) => {
  const { idNo } = req.body;
  try {
    await UserSchema.deleteOne({ idNo: idNo });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
    res.send({ status: "Error", data: "Deletion failed" });
  }
});

router.post("/appointment", (req, res) => {
  const { customerName, appointmentTime } = req.body;

  const appointment = new AppointmentSchema({
    customerName: customerName,
    appointmentTime:appointmentTime
  });

  appointment
    .save()
    .then(() => {
      res.status(201).json(appointment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error creating appointment" });
    });
});

router.get("/appointment", (req, res) => {
  Appointment.find()
    .then((appointment) => {
      res.json(appointment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving appointment" });
    });
});
module.exports = router;