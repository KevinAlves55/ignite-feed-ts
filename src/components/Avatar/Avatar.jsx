import Style from "./Avatar.module.css";

export const Avatar = ({ hasBorder = true, src }) => {
  return(
    <img 
      className={hasBorder ? Style.avatarWithBorder : Style.avatar} 
      src={src} 
    />
  );
};