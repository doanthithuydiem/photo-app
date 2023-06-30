import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPhoto, getListPhoto, postPhoto } from "../../photoThunk";


AddEditPage.propTypes = {};
function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photos = useSelector((state) => state.photoReducer.photos);

  useEffect(() => {
    if (photos.length === 0) {
    dispatch(getListPhoto());
    }
  }, [dispatch, photos.length]);

  const { photosId }  = useParams();
  const isAddMode = !photosId;
  const photoEdit = photos.find((photo) => photo.id === photosId);

  const initialValues = isAddMode 
  ? {
    title: "",
    categoryId: null,
    photo: "",
  }
  : photoEdit;

  // initialValues phải check điều kiện để biết đâu là edit đâu là add

  const handleSubmit = (values) => {
    // viết code check điều kiện để goi photo thunk add hoặc edit ở đây
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
   setTimeout(() => {
    navigate("/");
   }, 1000);
  };
  return (
    <div className="photo-edit">
      <Banner title="Create your photo" />
      <div className="photo-edit__form">
        <PhotoForm
          // sau khi check idAddMode truyền thêm idAddMode vào đây
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage; 