import { useContext, useState } from "react";

import {
  StateControlWrapper,
  StyledInput,
  StyledButton,
  ButtonGroup,
} from "../styles/StyledComponents";
import { GlobalContext } from "../GlobalData";

function StateControl() {
  const [inputValue, setInputValue] = useState("");
  const { setMessage } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(inputValue);
    setInputValue("");
  };

  const handleReset = () => {
    setInputValue("");
    setMessage("");
  };

  return (
    <StateControlWrapper>
      <h3>메시지 입력 영역</h3>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <ButtonGroup>
          <StyledButton type="submit">전송</StyledButton>
          <StyledButton type="button" onClick={handleReset}>
            초기화
          </StyledButton>
        </ButtonGroup>
      </form>
    </StateControlWrapper>
  );
}

// StateControl.propTypes = {
//   onMessageChange: PropTypes.func.isRequired,
// };

export default StateControl;
