import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./styles.scss";

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: "",
    onImageUrlChange: null,
    onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };

    return (
        <div className="random-photo">
            <div className="random-photo__button">
              <Button
                outline
                name={name}
                color="primary"
                onBlur={onRandomButtonBlur}
                onClick={handleRandomPhotoClick}
              >
                Random a photo
              </Button>
            </div>

            <div className="random-photo__photo">
              {imageUrl && (
                <img
                  onError={handleRandomPhotoClick}
                  src={imageUrl}
                  alt="not found. Please try again!"
                />
              )}
            </div>
        </div>
    );
}

export default RandomPhoto;