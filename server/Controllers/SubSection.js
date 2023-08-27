const SubSection = require("../Models/SubSection");
const Section = require("../Models/Section");
const { uploadImageToCloudinary } = require("../Utils/imageUploader");

//create SubSection

exports.createSubSection = async (req, res) => {
    try {
      // Extract necessary information from the request body
      const { sectionId, title, description } = req.body
      const video = req.files.video
  
      // Check if all necessary fields are provided
      if (!sectionId || !title || !description || !video) {
        return res
          .status(404)
          .json({ success: false, message: "All Fields are Required" })
      }
      console.log(video)
  
      // Upload the video file to Cloudinary
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      )
      console.log(uploadDetails)
      // Create a new sub-section with the necessary information
      const SubSectionDetails = await SubSection.create({
        title: title,
        timeDuration: `${uploadDetails.duration}`,
        description: description,
        videoUrl: uploadDetails.secure_url,
      })
  
      // Update the corresponding section with the newly created sub-section
      const updatedSection = await Section.findByIdAndUpdate(
        { _id: sectionId },
        { $push: { subSection: SubSectionDetails._id } },
        { new: true }
      ).populate("subSection")
  
      // Return the updated section in the response
      return res.status(200).json({ success: true, data: updatedSection })
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error("Error creating new sub-section:", error)
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }

//HW: updateSubSection

exports.updatedSubSection = async (req, res) => {
    try {

        //fetch data
        const { subSectionId, title, timeDuration, description } = req.body;

        //data validation
        if (!title || !subSectionId || !timeDuration || !description) {
            return res.status(400).json({
                success: false,
                message: 'Missing Properties',
            });
        }

        //update data
        const subSection = await SubSection.findByIdAndUpdate(subSectionId,
            { title, timeDuration, description },
            { new: true },
        )

        //return response 
        return res.status(200).json({
            success: true,
            message: 'SubSection Updated Successfully',
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to update SubSection, please try again",
            error: error.message,
        });
    }
}

//HW:deleteSubSection

exports.deleteSubSection = async (req, res) => {
    try {
        //get ID - assuming that we are sending ID in params
        const { subSectionId } = req.params
        //use findByIdandDelete
        await Section.findByIdAndDelete(subSectionId);
        //TODO[Testing]: do we need to delete the entry from the course schema ??
        //return response
        return res.status(200).json({
            success: true,
            message: "Section Deleted Successfully",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to delete Section, please try again",
            error: error.message,
        });
    }
}
