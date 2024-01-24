const Profile = require("../models/Profile")
const User = require("../models/User")
const Property = require("../models/Property")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")
// Method for updating a profile
exports.updateProfile = async (req, res) => {
  try {
    const {
      dateOfBirth = "",
      about = "",
      contactNumber = "",
      gender = ""
    } = req.body


    const id = req.user.id
    console.log("id: ",id)

    // Find the profile by id
    const userDetails = await User.findById(id)
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findById(profileId);

    // const profile = await Profile.findById(userDetails.additionalDetails)
    
    // Update the profile fields
    profileDetails.dateOfBirth = dateOfBirth;
    profileDetails.about = about;
    profileDetails.gender = gender;
    profileDetails.contactNumber = contactNumber;

    // Save the updated profile
    await profileDetails.save()
    console.log("profile:", profileDetails);

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id
    console.log(id)
    const user = await User.findById({ _id: id })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }
    // Delete Assosiated Profile with the User
    await Profile.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(user.additionalDetails),
    })
    for (const propertyId of user.properties) {
      await Property.findByIdAndDelete({
        _id: propertyId,
      })
    }
    // Now Delete User
    await User.findByIdAndDelete({ _id: id })
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ success: false, message: "User Cannot be deleted successfully" })
  }
}

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()
    console.log(userDetails)
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture
    const userId = req.user.id
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )
    console.log(image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    )
    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.getSellerListings = async (req, res) => {
    try {
        const sellerId = req.user.id;

        const Listings = await Property.find({
            Seller: sellerId,
        }).sort("createdAt");

        res.status(200).json({
            success: true,
            data: Listings,
        })
     } catch (error) {
        console.error(error)
        res.status(500).json({
        success: false,
        message: "Failed to retrieve Seller's Listings",
        error: error.message,
    })
    }
}