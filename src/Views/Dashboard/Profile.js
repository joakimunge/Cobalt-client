import React from "react";
import { css, withStyles } from "../../withStyles";
import Profile from "../../Components/Profile";
import { connect } from "react-redux";
import { requestUserUpdate } from "../../redux/user/actions";
import { requestAvatarUpdate } from "../../redux/user/actions";
import Loader from "../../Elements/Loader";

let ProfileView = ({ styles, dispatch, ...props }) => {
  const updateRequest = data => {
    dispatch(requestUserUpdate(data));
  };

  const handleAvatarChange = data => {
    dispatch(requestAvatarUpdate(data));
  };
  return props.isFetching ? (
    <Loader />
  ) : (
    <div {...css(styles.Profile)}>
      <Profile
        user={props.user}
        updateRequest={updateRequest}
        handleAvatarChange={handleAvatarChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: state.user.isFetching
});

ProfileView = connect(mapStateToProps)(ProfileView);

export default withStyles(({ colors }) => {
  return {
    Profile: {
      display: "flex",
      flexWrap: "wrap",
      height: "100%"
    }
  };
})(ProfileView);
