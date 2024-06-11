import { forwardRef } from "react";
import PropTypes from "prop-types";

const MyVideoPlayer = forwardRef(({ src, type, width }, ref) => {
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
});

MyVideoPlayer.displayName = "MyVideoPlayer";

MyVideoPlayer.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
};

export default MyVideoPlayer;
