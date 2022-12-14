import { ImgHTMLAttributes } from "react";
import Style from "./Avatar.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar: React.FC<IAvatarProps> = ({ hasBorder = true, ...props }) => {
  return (
    <img
      className={hasBorder ? Style.avatarWithBorder : Style.avatar}
      {...props}
    />
  );
};