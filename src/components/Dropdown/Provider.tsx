import React, { useCallback, useEffect, useState } from "react";

const initailState: initailStateProps = {
  registerOption: () => {},
  updateOptionProps: () => {},
  getOptionById: () => {},
  deleteOptionById: () => {},
  option: null,
  targetId: null,
  setTargetId: () => {},
  cachedid: null,
  setCachedid: () => {},
};
export const Context = React.createContext(initailState);

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
}) => {
  const [option, setOption] = useState<RegisterOptionProps[]>([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedid, setCachedid] = useState(null);

  const registerOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeight,
      contentDimensions,
    }: RegisterOptionProps) => {
      setOption((items) => [
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
          backgroundHeight,
          contentDimensions,
        },
      ]);
    },
    [setOption]
  );

  const updateOptionProps = useCallback(
    (optionId: any, props: any) => {
      setOption((items: any) =>
        items.map((item: RegisterOptionProps) => {
          if (optionId === item.id) {
            item = { ...item, ...props };
          }
          return item;
        })
      );
    },
    [setOption]
  );

  const getOptionById = useCallback(
    (id: any) => option.find((item) => item.id === id),
    [option]
  );

  const deleteOptionById = useCallback(() => {
    setOption((items) => items.filter((item) => item.id));
  }, [setOption]);

  useEffect(() => {
    if (targetId !== null) {
      setCachedid(targetId);
    }
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        option,
        targetId,
        setTargetId,
        cachedid,
        setCachedid,
      }}
    >
      {children}
    </Context.Provider>
  );
};
