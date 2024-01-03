const express = require("express")
const router = express.Router()
const { auth, isStudent } = require("../Middleware/auth")
const { deleteAccount, updateProfile, getAllUserDetails, updateDisplayPicture,getEnrolledCourses, } = require("../Controllers/Profile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount);

// Update User Profile
router.put("/updateProfile",auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);


module.exports = router;
