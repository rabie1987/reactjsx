import personelImg from "../ProfilePic.jpg";
function ProfilePhoto() {
  return (
    <img
      src={personelImg}
      alt=""
      width="300px"
      height="300px"
      position="center"
    />
  );
}

export default ProfilePhoto;
