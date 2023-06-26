import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";


AddEditPage.propTypes = {};
function AddEditPage(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  }
  // initialValues phải check điều kiện để biết đâu là edit đâu là add

  const handleSubmit = (values) => {
    console.log(values);
    // viết code check điều kiện để goi photo thunk add hoặc edit ở đây
  };
  return (
    <div className="photo-edit">
      <Banner title="Create your photo" />
      <div className="photo-edit__form">
        <PhotoForm
          // sau khi check idAddMode truyền thêm idAddMode vào đây
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage; 