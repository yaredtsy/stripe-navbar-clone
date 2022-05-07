interface DropdownOptionProps {
  name: string;
  backgroundHight: any;
  content: any;
}
interface DropdownProviderProps {
  children: any;
}

interface RegisterOptionProps {
  id: string;
  optionDimensions: any;
  optionCenterX: any;
  WrappedContent: any;
  backgroundHeight: any;
  contentDimensions: any;
}
interface DropDownSectionProps {
  option: RegisterOptionProps;
}

interface initailStateProps {
  registerOption: any;
  updateOptionProps: any;
  getOptionById: any;
  deleteOptionById: any;
  option: any;
  targetId: any;
  setTargetId: any;
  cachedid: any;
  setCachedid: any;
}

interface DropdownArrowProps {
  isFirstInteraction: boolean;
}
