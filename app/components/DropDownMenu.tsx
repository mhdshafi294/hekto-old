"use client";

import { AiOutlineDown } from "react-icons/ai";

interface DropDownMenuProps {
  onClick: () => void;
  label: string;
  items: string[];
}

//Todo: add a drop down menu using the items

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  onClick,
  label,
  items,
}) => {
  return (
    <div
      onClick={onClick}
      className="
        transition
        flex
        items-center
        justify-center
        text-zinc-100 
        text-base
      "
    >
      {label}
      <AiOutlineDown />
    </div>
  );
};

export default DropDownMenu;
