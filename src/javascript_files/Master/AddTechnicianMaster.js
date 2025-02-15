import React from "react";
import { useState } from "react";
import "../../css_files/Master/AddTechnicianMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function AddTechnicianMaster({ setshowaddform, reload, setReload }) {
  const [TechnicianData, setTechnicianData] = useState({
    Name: "",
    CompanyPhoneNumber: "",
    Age: "",
    Qualification: "",
    Experience: "",
    YearsWithRoss: "",
    CTC: "",
    PostingLocation: "",
    Aadhar: "",
    Pan: "",
    ResidentialAddress: "",
    PersonalPhoneNumber: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Technician`;
    axios
      .post(URL, TechnicianData)
      .then((response) => {
        console.log(response.data);
        setshowaddform(false);
        setReload(!reload);
      })
      .catch((error) => {
        console.error("Error adding technician data:", error);
      });
  }
  return (
    <form className="add-technician-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Technician Name</label>
        <input
          type="text"
          placeholder="Enter Name of Technician"
          onChange={(e) =>
            setTechnicianData({ ...TechnicianData, Name: e.target.value })
          }
        />
      </blockquote>
      <blockquote>
        <label>Company Phone Number</label>
        <input
          type="number"
          placeholder="Enter Company Phone Number"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              CompanyPhoneNumber: e.target.value,
            })
          }
        />
      </blockquote>
      <aside>
        <blockquote>
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) =>
              setTechnicianData({
                ...TechnicianData,
                Age: e.target.value,
              })
            }
          />
        </blockquote>
        <blockquote>
          <label>Qualification</label>
          <input
            type="text"
            placeholder="Enter Qualification"
            onChange={(e) =>
              setTechnicianData({
                ...TechnicianData,
                Qualification: e.target.value,
              })
            }
          />
        </blockquote>
      </aside>
      <blockquote>
        <label>Experience</label>
        <input
          type="number"
          placeholder="Enter Experience in Years"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              Experience: e.target.value,
            })
          }
        />
      </blockquote>
      <aside>
        <blockquote>
          <label>Years with Ross</label>
          <input
            type="number"
            placeholder="Enter Number of Years with Ross"
            onChange={(e) =>
              setTechnicianData({
                ...TechnicianData,
                YearsWithRoss: e.target.value,
              })
            }
          />
        </blockquote>
        <blockquote>
          <label>CTC</label>
          <input
            type="number"
            placeholder="Enter CTC"
            onChange={(e) =>
              setTechnicianData({
                ...TechnicianData,
                CTC: e.target.value,
              })
            }
          />
        </blockquote>
      </aside>
      <blockquote>
        <label>Posting Location</label>
        <input
          type="text"
          placeholder="Enter Posting Location"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              PostingLocation: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Aadhar Number</label>
        <input
          type="number"
          placeholder="Enter Aadhar Number"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              Aadhar: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>PAN</label>
        <input
          type="text"
          placeholder="Enter Pan Card Number"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              Pan: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Residential Address</label>
        <input
          type="text"
          placeholder="Enter Residential Address"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              ResidentialAddress: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Personal Phone Number</label>
        <input
          type="number"
          placeholder="Enter Personal Phone Number"
          onChange={(e) =>
            setTechnicianData({
              ...TechnicianData,
              PersonalPhoneNumber: e.target.value,
            })
          }
        />
      </blockquote>
      <button type="submit">Add </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddTechnicianMaster;
