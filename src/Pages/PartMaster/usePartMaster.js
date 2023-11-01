import React, { useState, useEffect } from "react";
import {
  reqToAddPart,
  reqUpdateParts,
  reqGetAllParts,
} from "../../redux/actions/partActions";
import { useDispatch, useSelector } from "react-redux";
import { notifySuccess, notifyError } from "../../helpers/tostify";
import { BASE_URL } from "../../services/httpRequest";

const usePartMaster = () => {
  // Initial values
  const fieldsData = [
    {
      label: "Part Name",
      name: "partName",
      type: "text",
      required: true,
    },
    {
      label: "Part Code",
      name: "partCode",
      type: "text",
      required: true,
    },
    {
      label: "",
      name: "image",
      type: "file",
      required: true,
    },
    {
      label: "Data And Time",
      name: "dateAndTime",
      type: "text",
      required: true,
    },
  ];

  // Redux states
  const partState = useSelector((state) => state.partsReducer);

  // States
  const [formData, setFormData] = useState({
    partName: "",
    partCode: "",
    dateAndTime: "",
    image: "",
  });

  const [partUpdates, setPartsUpdates] = useState({
    partName: "",
    partCode: "",
    dateAndTime: "",
    image: "",
    id: "",
  });

  const [partsData, setPartsData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  // Table things
  const columns = [
    {
      name: "Part Name",
      selector: (row) => row?.partName,
    },
    {
      name: "Part Code",
      selector: (row) => row?.partCode,
    },
    {
      name: "Image",
      center: true,
      cell: (row) => (
        <img
          src={BASE_URL + "/uploads/" + row?.image} // Assuming 'image' contains the URL of the image
          alt="Part Image"
          style={{ width: "100px" }} // Customize the width and other styles
        />
      ),
    },
    {
      name: "Date and Time",
      right: true,
      selector: (row) => row?.dateAndTime,
    },
    // {
    //   name: "Action",
    //   center: true,
    //   cell: (row) => (
    //     <>
    //       <button id={row._id} onClick={handleRowClick}>
    //         <AiFillEdit className="pointer-events-none" />
    //       </button>
    //       &nbsp;
    //       <button
    //         //   onClick={handleCodeDeleted}
    //         name={row._id}
    //         className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       >
    //         <AiFillDelete className="pointer-events-none" />
    //       </button>
    //     </>
    //   ),
    // },
  ];

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.id;
    value = name === "image" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    const form = new FormData();
    form.append("partName", formData.partName);
    form.append("partCode", formData.partCode);
    form.append("file", formData.image);
    dispatch(
      reqToAddPart(form, (status, message) => {
        if (status) {
          notifySuccess(message);
          setIsSubmitted(true);
          setFormData({
            partName: "",
            partCode: "",
            dateAndTime: "",
            image: "",
          });
        } else {
          notifyError("Part added failed!");
        }
      })
    );
  };

  const handleFormUpdate = async () => {
    const form = new FormData();
    form.append("partName", partUpdates.partName);
    form.append("partCode", partUpdates.partCode);
    form.append("file", partUpdates.image);
    dispatch(
      reqUpdateParts(form, partUpdates.id, (status, message) => {
        if (status) {
          notifySuccess(message);
          setFormData({
            partName: "",
            partCode: "",
            dateAndTime: "",
            image: "",
          });
        } else {
          notifyError("Part added failed!");
        }
      })
    );
  };

  useEffect(() => {
    dispatch(reqGetAllParts());
  }, [isSubmitted]);

  useEffect(() => {
    if (partState?.parts?.length > 0) {
      setPartsData(partState?.parts);
    }
  }, [partState?.parts]);

  return {
    fieldsData,
    formData,
    columns,
    partsData,
    handleChanges,
    handleFormSubmit,
    partUpdates,
    setPartsUpdates,
    handleFormUpdate,
  };
};

export default usePartMaster;
