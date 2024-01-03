const express = require("express");
const router = express.Router();

//Course Controller Imports
const { createCourse,
        getAllCourses,
        getCourseDetails, 
        editCourse} = require("../Controllers/Course");

// Categories Controllers Import
const {
    showAllCategory,
    createCategory,
    categoryPageDetails,
} = require("../Controllers/Category")

// Sections Controllers Import
const {
    createSection,
    updateSection,
    deleteSection,
} = require("../Controllers/Section")

// Sub-Sections Controllers Import
const {
    createSubSection,
    updatedSubSection,
    deleteSubSection,
} = require("../Controllers/SubSection")

// Rating Controllers Import
const {
    createRating,
    getAverageRating,
    getAllRating,
} = require("../Controllers/RatingAndReviews")

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../Middleware/auth")


// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)

//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)

// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)

// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)

// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updatedSubSection)

// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)

// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)

// Get all Registered Courses
router.get("/getAllCourses", getAllCourses)

// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)

// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse)

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)   
router.get("/showAllCategories", showAllCategory)
router.post("/getCategoryPageDetails", categoryPageDetails)


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)  


module.exports = router;
