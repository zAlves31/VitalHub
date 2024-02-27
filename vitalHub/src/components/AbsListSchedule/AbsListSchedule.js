import { ButtonTabsStyles, ButtonTextStyles } from "./Style";

export const AbsListSchedule = ({
  textButton,
  clickButton = false,
  onPress,
}) => {
  return (
    <ButtonTabsStyles clickButton={clickButton} onPress={onPress}>
      <ButtonTextStyles clickButton={clickButton}>{textButton}</ButtonTextStyles>
    </ButtonTabsStyles>
  );
};