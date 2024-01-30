import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "../../../../services/operations/SettingsAPI";
// import IconBtn from ".././components/common/IconBtn";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

const EditProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitProfileForm)}
        className="edit-profile-detail"
      >
        <div className="edit-profile-details">
          <div className="edit-profile-details-column">
            <div className="edit-profile-details-column-data">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                {...register("firstName", { required: false })}
                defaultValue={user?.firstName}
              />
              {errors?.firstName && <span>Please enter your first name.</span>}
            </div>
            <div className="edit-profile-details-column-data">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                {...register("dateOfBirth", {
                  required: {
                    value: false,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors?.dateOfBirth && (
                <span>{errors?.dateOfBirth.message}</span>
              )}
            </div>
            <div className="edit-profile-details-column-data">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                {...register("contactNumber", {
                  required: {
                    value: false,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors?.contactNumber && (
                <span>{errors?.contactNumber.message}</span>
              )}
            </div>
          </div>
          <div className="edit-profile-details-column">
            <div className="edit-profile-details-column-data">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                {...register("lastName", { required: false })}
                defaultValue={user?.lastName}
              />
              {errors?.lastName && <span>Please enter your last name.</span>}
            </div>
            <div className="edit-profile-details-column-data">
              <label htmlFor="gender">Gender</label>
              <select
                type="text"
                name="gender"
                id="gender"
                {...register("gender", { required: false })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="edit-profile-details-column-data">
              <label htmlFor="about">About</label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                {...register("about", { required: false })}
                defaultValue={user?.additionalDetails?.about}
              />
            </div>
          </div>
        </div>

        <div className="edit-profile-detail-buttons">
          <button
            type="button"
            className="profile-edit-button back-button"
            onClick={() => navigate("/dashboard/settings")}
          >
            {/* <FaArrowLeftLong /> */}
            Back
          </button>
          <button type="submit" className="special-btn">
            Save
          </button>
        </div>
      </form>
      {/* <form
        onSubmit={handleSubmit(submitProfileForm)}
        className="profile-form-container"
      >
        <div className="form-row">
          <h2 className="section-heading">Profile Information</h2>
          <div className="form-row">
            <div className="form-row">
              <label htmlFor="firstName" className="label-style">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="form-style"
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="error-message">
                  Please enter your first name.
                </span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="lastName" className="label-style">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                className="form-style"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="error-message">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-date-of-birth">
              <label htmlFor="dateOfBirth" className="label-style">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="form-style"
                {...register("dateOfBirth", {
                  required: "Please enter your Date of Birth.",
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="error-message">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="gender" className="label-style">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="form-select"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
              </select>
              {errors.gender && (
                <span className="error-message">
                  Please select your gender.
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-row">
              <label htmlFor="contactNumber" className="label-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter contact number"
                className="form-style"
                {...register("contactNumber", {
                  required: "Please enter your Contact Number.",
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="error-message">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>

             
            <div className="form-row">
              <label htmlFor="about" className="label-style">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter bio details"
                className="form-style"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="error-message">
                  Please enter your bio details.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="flex justify-end gap-2">
            <button
              onClick={() => navigate("/dashboard/my-profile")}
              className="cancel-button"
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Save" className="action-button" />
          </div>
        </div>
      </form> */}
    </>
  );
};

export default EditProfile;