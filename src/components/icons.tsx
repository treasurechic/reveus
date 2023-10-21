import { Icon } from "@iconify/react";

export const Icons = ({
  icon,
  fontSize,
  color,
  className,
}: {
  icon: string;
  fontSize?: string;
  color?: string;
  className?: string;
}) => {
  return (
    <>
      <Icon
        icon={icon}
        fontSize={fontSize}
        color={color}
        className={className}
      />
    </>
  );
};
