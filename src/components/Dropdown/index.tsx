import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./dimension";
import { Context } from "./Provider";

let lastOptionId = 0;

const DropdownOption: React.FC<DropdownOptionProps> = ({
  name,
  content: Content,
  backgroundHight,
}) => {
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionDimensions, optionHook] = useDimensions();

  const [registerd, setRegisterd] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registerd && optionDimensions) {
      const WrappedContent = () => {
        const contetnRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const contentDimensions = contetnRef.current?.getBoundingClientRect();
          updateOptionProps(id, { contentDimensions });
        }, []);

        return (
          <div ref={contetnRef}>
            <Content />
          </div>
        );
      };

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions?.width / 2,
        WrappedContent,
        backgroundHight,
      });

      setRegisterd(true);
    } else if (registerd && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions?.width / 2,
      });
    }
  }, [
    Content,
    registerOption,
    id,
    registerd,
    optionDimensions,
    updateOptionProps,
    deleteOptionById,
    backgroundHight,
  ]);

  useEffect(() => deleteOptionById(id), [deleteOptionById, id]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => true;

  const handleClick = (e: any) => {
    e.preventDefault();

    return targetId == id ? handleClose() : handleOpen();
  };

  return (
    <motion.button
      className="dropdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => handleOpen()}
      onHoverEnd={() => handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>
  );
};

export default DropdownOption;
