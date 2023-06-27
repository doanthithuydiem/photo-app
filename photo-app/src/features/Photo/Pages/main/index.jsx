import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import { useNavigate } from "react-router-dom";
import Images from "../../../../constants/images";
import { Button } from "reactstrap";
import PhotoList from "../../components/PhotoList";
import { useDispatch, useSelector } from "react-redux";
import { getListPhoto } from "../../photoThunk";

function MainPage() {
    const photos = useSelector((state) => state.photoReducer.photos);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toPageAdd = (photo) => {
        navigate(`/photos/add`);
    };

    const handleRemove = (photo) => {
        // viet code gọi photothunk delete
        console.log(photo);
    };
    const handleEdit = (photo) => {
        // viet code chuyen qua trang edit
        console.log(photo);
    };
    useEffect(() => {
        dispatch(getListPhoto());
    }, []);
    return (<div className="photo-main">
        <Banner title="🎉 Your awesome photos 🎉"
            backgroundUrl={Images.BANNER_BG} />

        <Button onClick={toPageAdd} color="info">
            Add New Photo
        </Button>
        {/* // xem lai chỗ này để lấy isLoading từ store về check điều kiên hiển thị spinner khi chưa call API xong */}
        <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEdit}
            onPhotoRemoveClick={handleRemove}
        />
    </div>);
}
export default MainPage;