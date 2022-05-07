import { useContext } from "react";
import { Context } from "./Provider";
import { motion } from "framer-motion";

export const DropDownSection: React.FC<DropDownSectionProps> = ({ option }) => {
  const { updateOptionProps, cachedid } = useContext(Context);
  const { id, optionDimensions, optionCenterX, contentDimensions } = option;

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2;

  const isActive = cachedid === id;
  console.log(isActive);

  return (
    <motion.div
      className="dropdown-section "
      initial={{ x }}
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "unset" : "none",
      }}
      transition={{ ease: "easeOut", opacity: { duration: 0.2 } }}
    >
      <option.WrappedContent />
    </motion.div>
  );
};
