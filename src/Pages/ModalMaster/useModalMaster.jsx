import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqToAddModal, reqGetAllModal } from "../../redux/actions/modalAction";
import { ExpanderComponentProps } from "react-data-table-component";
import { FaPlay } from "react-icons/fa";
import { BASE_URL } from "../../services/httpRequest";

const useModalMaster = () => {
  const fieldsData = [
    {
      label: "FG Code",
      name: "fgCode",
      type: "text",
      required: true,
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      required: true,
    },
    {
      label: "Parts Selection",
      name: "partsSelection",
      type: "select",
      required: true,
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      required: true,
    },
    {
      label: "Video",
      name: "video",
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
  const columns = [
    {
      name: "FG Code",
      selector: (row) => row.fgCode,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Video",
      cell: (row) =>
        row?.video ? (
          <a target="_blank" href={`${BASE_URL}/uploads/${row?.video}`}>
            <FaPlay /> {row?.video}
          </a>
        ) : (
          "No avaliable!"
        ),
    },
    {
      name: "Date and Time",
      selector: (row) => row.dateAndTime,
      right: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  const partInitState = {
    partName: "",
    partCode: "",
    dateAndTime: "",
    image: "",
    quantity: "",
    partIndex: "",
  };

  const modalMasterInitState = {
    fgCode: "",
    description: "",
    video: "",
  };

  const partState = useSelector((state) => state.partsReducer);
  console.log("partState : ", partState);

  const [partsData, setPartsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (partState?.parts) {
      setPartsData(partState?.parts);
    }
  }, [partState?.parts]);

  const [modalMasterForm, setModalMasterForm] = useState(modalMasterInitState);
  const [part1, setPart1] = useState(partInitState);
  const [part2, setPart2] = useState(partInitState);
  const [part3, setPart3] = useState(partInitState);
  const [part4, setPart4] = useState(partInitState);
  const [part5, setPart5] = useState(partInitState);
  const [part6, setPart6] = useState(partInitState);
  const [part7, setPart7] = useState(partInitState);
  const [part8, setPart8] = useState(partInitState);
  const [part9, setPart9] = useState(partInitState);
  const [part10, setPart10] = useState(partInitState);
  const [part11, setPart11] = useState(partInitState);
  const [part12, setPart12] = useState(partInitState);
  const [part13, setPart13] = useState(partInitState);
  const [part14, setPart14] = useState(partInitState);
  const [part15, setPart15] = useState(partInitState);

  const handleSelectChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const filteredData = partsData?.filter((item) => item.partCode == value)[0];
    console.log("filteredData : ", filteredData);
    if (name === "part1") {
      setPart1({
        ...part1,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part2") {
      setPart2({
        ...part2,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part3") {
      setPart3({
        ...part3,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part4") {
      setPart4({
        ...part4,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part5") {
      setPart5({
        ...part5,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part6") {
      setPart6({
        ...part6,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part7") {
      setPart7({
        ...part7,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part8") {
      setPart8({
        ...part8,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part9") {
      setPart9({
        ...part9,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part10") {
      setPart10({
        ...part10,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part11") {
      setPart11({
        ...part11,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part12") {
      setPart12({
        ...part12,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part13") {
      setPart13({
        ...part13,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part14") {
      setPart14({
        ...part14,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    } else if (name === "part15") {
      setPart15({
        ...part15,
        partName: filteredData.partName,
        partCode: filteredData.partCode,
        dateAndTime: filteredData.dateAndTime,
        image: filteredData.image,
        partIndex: filteredData.partIndex,
      });
    }
    const updatedArr = partsData?.map((item) => {
      if (item.partCode === value) {
        return { ...item, color: "red" };
      }
      return item;
    });
    setPartsData(updatedArr);
  };

  const reqToSetQuantity = (e) => {
    const name = e.target.name;
    if (name === "part1") {
      setPart1({
        ...part1,
        quantity: e.target.value,
      });
    } else if (name === "part2") {
      setPart2({
        ...part2,
        quantity: e.target.value,
      });
    } else if (name === "part3") {
      setPart3({
        ...part3,
        quantity: e.target.value,
      });
    } else if (name === "part4") {
      setPart4({
        ...part4,
        quantity: e.target.value,
      });
    } else if (name === "part5") {
      setPart5({
        ...part5,
        quantity: e.target.value,
      });
    } else if (name === "part6") {
      setPart6({
        ...part6,
        quantity: e.target.value,
      });
    } else if (name === "part7") {
      setPart7({
        ...part7,
        quantity: e.target.value,
      });
    } else if (name === "part8") {
      setPart8({
        ...part8,
        quantity: e.target.value,
      });
    } else if (name === "part9") {
      setPart9({
        ...part9,
        quantity: e.target.value,
      });
    } else if (name === "part10") {
      setPart10({
        ...part10,
        quantity: e.target.value,
      });
    } else if (name === "part11") {
      setPart11({
        ...part11,
        quantity: e.target.value,
      });
    } else if (name === "part12") {
      setPart12({
        ...part12,
        quantity: e.target.value,
      });
    } else if (name === "part13") {
      setPart13({
        ...part13,
        quantity: e.target.value,
      });
    } else if (name === "part14") {
      setPart14({
        ...part14,
        quantity: e.target.value,
      });
    } else if (name === "part15") {
      setPart15({
        ...part15,
        quantity: e.target.value,
      });
    }
  };

  let name;
  let value;
  const handleModalMasterChanges = (e) => {
    name = e.target.id;
    value = name === "video" ? e.target.files[0] : e.target.value;
    setModalMasterForm({ ...modalMasterForm, [name]: value });
  };

  const handleModalMasterSubmit = () => {
    const fd = new FormData();
    const formData = {
      ...modalMasterForm,
      partsSelection: [
        part1,
        part2,
        part3,
        part4,
        part5,
        part6,
        part7,
        part8,
        part9,
        part10,
        part11,
        part12,
        part13,
        part14,
        part15,
      ],
    };
    fd.append("video", formData.video);
    dispatch(
      reqToAddModal(formData, fd, (success, message) => {
        if (success) {
          setPart1(partInitState);
          setPart2(partInitState);
          setPart3(partInitState);
          setPart4(partInitState);
          setPart5(partInitState);
          setPart6(partInitState);
          setPart7(partInitState);
          setPart8(partInitState);
          setPart9(partInitState);
          setPart10(partInitState);
          setPart11(partInitState);
          setPart12(partInitState);
          setPart13(partInitState);
          setPart14(partInitState);
          setPart15(partInitState);
          setModalMasterForm(modalMasterInitState);
        }
      })
    );
  };

  useEffect(() => {
    dispatch(reqGetAllModal());
  }, []);

  return {
    fieldsData,
    columns,
    data,
    handleSelectChanges,
    reqToSetQuantity,
    handleModalMasterSubmit,
    modalMasterForm,
    handleModalMasterChanges,
    partData: partsData,
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
    part9,
    part10,
    part11,
    part12,
    part13,
    part14,
    part15,
  };
};

export default useModalMaster;
