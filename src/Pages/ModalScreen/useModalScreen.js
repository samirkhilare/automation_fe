import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reqGetAllModal } from "../../redux/actions/modalAction";
import { reqToWriteModbus } from "../../redux/actions/modbusActions";

const useModalScreen = () => {
  const modalState = useSelector((state) => state.modalsReducer);
  const [modals, setModals] = useState([]);
  const [filteredModals, setFilteredModal] = useState("");
  console.log("filteredModals : ", filteredModals);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  let timer;
  let value;

  function filterDataById(value) {
    if (modals?.length > 0) {
      const result = modals?.filter((item) => item?.fgCode === value)[0];
      if (result) {
        console.log("result : ", result);
        setFilteredModal(result);
      }
    }
    console.log("Filtering data by ID : ", value);
  }

  const handleModalMasterChanges = (e) => {
    value = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => filterDataById(value), 2000);
  };

  const reqToSendDataToModbus = () => {
    const partArr = filteredModals?.partsSelection?.map((item) =>
      item.partIndex ? item.partIndex : 0
    );
    dispatch(reqToWriteModbus(partArr));
  };

  useEffect(() => {
    if (filteredModals) {
      const videoElement = videoRef.current;
      const handleVideoEnd = () => {
        videoElement.currentTime = 0; // Reset the video to the beginning
        videoElement.play(); // Start playing the video again
      };
      videoElement.addEventListener("ended", handleVideoEnd);
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setModals(modalState.modals);
  }, [modalState]);

  useEffect(() => {
    dispatch(reqGetAllModal());
  }, []);
  return {
    handleModalMasterChanges,
    modals,
    filteredModals,
    togglePlay,
    videoRef,
    isPlaying,
    reqToSendDataToModbus,
  };
};

export default useModalScreen;
