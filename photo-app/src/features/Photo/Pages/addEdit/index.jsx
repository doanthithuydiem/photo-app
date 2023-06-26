import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


AddEditPage.proptype = {};
function AddEditPage(props) {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const photos = useSelector((state) => state.photoReducer.photos);

   useEffect(() => {
    if (photos.lenght === 0) {
      dispatch(getListPhoto());
    }
   }, [dispatch, photos.lenght]);

   const { photoId } = useParams();
   const isAddMode = !photoId;
   const photoEdit = photos.find((photo) => photo.id === photoId);
   const initialValues = isAddMode
    ? {
        title: "",
        catagoryId: null,
        photo: "",
      }
    : photoEdit;
   
   const handleSubmit = (values) => {
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
   } else {
      const action = editPhoto(values);
      dispatch(action);
   }
   navigate ("/");
};
return (
  <div className="photo-edit">
    <Banner titlt="" />
    <div className="photo-edit__form">
      <PhotoForm 
        idAddMode={isAddMode}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
);
}

export default AddEditPage; 