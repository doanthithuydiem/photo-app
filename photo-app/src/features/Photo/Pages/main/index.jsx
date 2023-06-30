import React, { useEffect } from "react";
import Banner from "../../../../components/banner";
import { useNavigate } from "react-router-dom";
import Images from "../../../../constants/images";
import { Button, Container, Spinner } from "reactstrap";
import PhotoList from "../../components/PhotoList";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto, getListPhoto } from "../../photoThunk";
import "./styles.scss";

MainPage.propTypes = {};

function MainPage() {
    const photos = useSelector((state) => state.photoReducer.photos);
    const isLoading = useSelector((state) => state.photoReducer.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toPageAdd = (photo) => {
        navigate(`/photos/add`);
    };

    const handleRemove = (photo) => {
        // viet code gọi photothunk delete
        const action = deletePhoto(photo.id);
        dispatch(action);
    };

    const handleEdit = (photo) => {
        // viet code chuyen qua trang edit
        navigate(`/photo/${photo.id}`);
    };

    useEffect(() => {
        dispatch(getListPhoto());
    }, []);

    return (<div className="photo-main">
        <Banner title="🎉 Your awesome photos 🎉"
            backgroundUrl={Images.BANNER_BG} />
        
        <Container className="text-center">
            <div className="box-link">
                <Button onClick={toPageAdd} color="info">
                    Add New Photo
                </Button>
            </div>    
        {/* // xem lai chỗ này để lấy isLoading từ store về check điều kiên hiển thị spinner khi chưa call API xong */}
        {isLoading ? (
            <Spinner />
        ) : (
            <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEdit}
            onPhotoRemoveClick={handleRemove}
            />
        )}
        </Container>
    </div>
    );
}
export default MainPage;