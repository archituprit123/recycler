import React, { useState, useEffect } from "react";
import axios from "axios";
import validator from "validator";
import mainLogo from "../images/login.png";

function Registration() {
  const [FacilityType, setFacilityType] = useState("");
  const [WasteName, setWasteName] = useState("");
  const [WasteAddress, setWasteAddress] = useState("");
  const [WasteState, setWasteState] = useState("");
  const [WasteDistrict, setWasteDistrict] = useState("");
  const [ContactName, setContactName] = useState("");
  const [ContactDesignation, setContactDesignation] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [ContactSpcb, setContactSpcb] = useState("");
  const [WasteCapacity, setWasteCapacity] = useState("");
  const [WasteRegNo, setWasteRegNo] = useState("");
  const [selectedfile, setfile] = useState("");
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState("");
  //const [isCount, setCount] = useState(false);

  const changeHandler = (event) => {
    var file_size = event.target.files[0].size / 1024 / 1024;

    if (file_size > 2) {
      alert("More Than 2 Mb File Size is not allowed");
      event.target.value = "";
    }
    if (file_size < 2) {
      setfile(event.target.files[0]);
    }
  };

  const submitReview = (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      const formData = new FormData();
      formData.append("FacilityType", FacilityType);
      formData.append("WasteName", WasteName);
      formData.append("WasteAddress", WasteAddress);
      formData.append("WasteState", WasteState);
      formData.append("WasteDistrict", WasteDistrict);
      formData.append("ContactName", ContactName);
      formData.append("ContactDesignation", ContactDesignation);
      formData.append("ContactNo", ContactNo);
      formData.append("ContactEmail", ContactEmail);
      formData.append("ContactSpcb", ContactSpcb);
      formData.append("WasteCapacity", WasteCapacity);
      formData.append("WasteRegNo", WasteRegNo);
      formData.append("fileName", selectedfile);

      const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      };

      axios
        .get(
          `http://125.19.52.219:8080/api/fetch?ContactNo=${ContactNo}&&FacilityType=${FacilityType}`
        )
        .then((result) => {
          // alert(response.data.code);
          console.log("result.data.code====", result.data.code);

          if (result.data.code > 0) {
            alert("User Already registered");
            // return true;
          } else {
            axios
              .post("http://125.19.52.219:8080/api/insert", formData, {
                headers: headers,
              })
              .then((resp) => {
                alert("Registration of Facality Completed Successfully!!!");
                // window.location = "http://125.19.52.219/plastic";
              });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect( async () => {
    const url = "http://125.19.52.219:8080/api/fetchstates";
    const response = await fetch(url);
    const json = await response.json();
    console.log("json data",json);
  
  
  })


  const formValidation = () => {
    let isValid = true;
    //console.log(WasteName.trim.length);
    if(FacilityType.trim().length < 3)
    {
      alert("Please Select Facality Type")
      isValid = false;
    }
    if (WasteName.trim().length < 5) {
      alert("Name of Plastic Waste Processing Facility is too short");
      isValid = false;
    }
    if (WasteAddress.trim().length < 5) {
      alert("Address of Plastic Waste Processing Facility is too short");
      isValid = false;
    }
    if (ContactNo.trim().length != 10) {
      alert("Mobile Number is Not Valid");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="container">
      <p className="text-center font-weight-bold">
        Registration of Plastic Waste Processing Facility
      </p>

      <form enctype="multipart/form-data" onSubmit={submitReview}>
        <div className="form-group">
          <label>Type of Facility: </label>
          <br />
          <select
            className="form-control"
            required
            name="FacilityType"
            onChange={(e) => {
              setFacilityType(e.target.value);
            }}
          >
            <option value="">Choose One</option>
            <option value="Co-processors">Co-processors</option>
            <option value="Recyclers">Recyclers</option>
            <option value="Waste_To_Energy">Waste To Energy</option>
            <option value="Road_Making">Road Making</option>
            <option value="RDF">RDF</option>
            <option value="Pyrolysis">Pyrolysis</option>
            <option value="Other">others</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label>Name of Plastic Waste Processing Facility: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="WasteName"
            onChange={(e) => {
              if (e.target.value.length > 100) {
                alert("Plaese Enter Valid Name");
                setIsError(true);
              } else {
                setWasteName(e.target.value);
              }
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Address of PWPF: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="WasteAddress"
            onChange={(e) => {
              if (e.target.value.length > 500) {
                alert("Plaese Enter Valid Name");
                setIsError(true);
              } else {
                setWasteAddress(e.target.value);
              }
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>State: </label>
          <br />
          <select
            name="WasteState"
            id="state"
            required
            class="form-control"
            onChange={(e) => {
              setWasteState(e.target.value);
            }}
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label>District: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="WasteDistrict"
            onChange={(e) => {
              if (e.target.value.length > 100) {
                alert("Plaese Enter Valid District Name");
                setIsError(true);
              } else {
                setWasteDistrict(e.target.value);
              }
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Contact Person Name: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="ContactName"
            onChange={(e) => {
              setContactName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Designation: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="ContactDesignation"
            onChange={(e) => {
              setContactDesignation(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Mobile No: </label>
          <br />
          <input
            type="number"
            required
            className="form-control"
            name="ContactNo"
            onChange={(e) => {
              if (e.target.value.length > 10) {
                alert("Plaese Enter Valid Mobile Number");
                setIsError(true);
              }

              setContactNo(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email Id: </label>
          <br />
          <input
            type="email"
            required
            className="form-control"
            name="ContactEmail"
            onChange={(e) => {
              setContactEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Whether Registered With SPCB:</label>
          <br />
          <select
            name="ContactSpcb"
            className="form-control"
            onChange={(e) => {
              setContactSpcb(e.target.value);
            }}
          >
            <option value="">Choose One</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label>Proccesing Capacity in TPA: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="WasteCapacity"
            onChange={(e) => {
              setWasteCapacity(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Registration Number: </label>
          <br />
          <input
            type="text"
            required
            className="form-control"
            name="WasteRegNo"
            onChange={(e) => {
              setWasteRegNo(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Upload Registration Certificate: </label>
          <br />
          <input
            type="file"
            accept=".pdf"
            className="form-control"
            name="RegistrationUpload"
            onChange={changeHandler}
          />
        </div>
        <ul></ul>
        <p class="alert alert-danger">
          Only Pdf File Allowed maximum size of 2MB.
        </p>
        <br />
        <div className="form-group">
          <input type="submit" value="Register" className="btn btn-primary" />
        </div>
      </form>

     
    </div>
  );
}

export default Registration;
