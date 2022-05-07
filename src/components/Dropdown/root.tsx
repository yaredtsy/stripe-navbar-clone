import { motion } from "framer-motion";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "./Provider";
import { DropDownSection } from "./section";

export const DropdownRoot = () => {
  const {
    option,
    cachedid,
    getOptionById,
    targetId,
  }: { option: any; cachedid: any; getOptionById: any; targetId: any } =
    useContext(Context);

  const cacheOption = useMemo(
    () => getOptionById(cachedid),
    [cachedid, getOptionById]
  );

  let [width, height, x] = [0, 0, 0];

  if (cacheOption) {
    const { optionCenterX, contentDimensions } = cacheOption;
    width = contentDimensions?.width;
    height = contentDimensions?.height;
    x = optionCenterX - width / 2;
  }

  const [hovering, setHovering] = useState(false);
  const isActive = targetId !== null || hovering;

  const [hasInteracted, setHasInteracted] = useState(false);
  const isFirstInteraction = isActive && !hasInteracted;
  console.log(isFirstInteraction);

  if (isFirstInteraction) {
    setTimeout(() => {
      if (!hasInteracted) setHasInteracted(true);
    }, 15);
  }

  useEffect(() => {
    if (isActive) return;
    let timeout = setTimeout(() => setHasInteracted(false), 0.22 * 1000);

    return () => clearTimeout(timeout);
  }, [isActive]);
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="dropdown-root"
        animate={{ opacity: isActive ? 1 : 0, rotateX: isActive ? 0 : -15 }}
        transition={{
          opacity: { duration: 0.22, delay: 0.05 },
          rotateX: { duration: 0.22, delay: 0.05 },
        }}
      >
        <motion.div
          className="dropdown-container"
          animate={{
            x,
            width,
            height,
            pointerEvents: isActive ? "unset" : "none",
          }}
          transition={{
            ease: "easeout",
            x: isFirstInteraction ? { duration: 0 } : 0.22,
            width: { duration: isFirstInteraction ? 0 : 0.22 * 0.93 },
            height: { duration: isFirstInteraction ? 0 : 0.22 * 0.93 },
            pointerEvents: { delay: 0.05 },
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          <motion.div
            animate={{ x: -x }}
            transition={{
              x: isFirstInteraction ? { duration: 0 } : undefined,
            }}
          >
            {option.map((item: any) => (
              <DropDownSection key={item.id} option={item} />
            ))}
          </motion.div>
        </motion.div>
        <DropdownArrow isFirstInteraction={isFirstInteraction} />
      </motion.div>
    </div>
  );
};

const DropdownArrow: React.FC<DropdownArrowProps> = ({
  isFirstInteraction,
}) => {
  const { cachedid, getOptionById } = useContext(Context);
  const cacheOption = useMemo(
    () => getOptionById(cachedid),
    [cachedid, getOptionById]
  );

  const x = cacheOption ? cacheOption.optionCenterX : 0;
  return (
    <motion.div
      className="dropdown-arrow"
      initial={{
        opacity: 0,
      }}
      animate={{
        x,
        pointerEvents: "none",
        opacity: x > 0 ? 1 : 0,
      }}
      transition={{
        ease: "easeOut",
        x: { duration: isFirstInteraction ? 0 : 0.22 },
      }}
    />
  );
};
