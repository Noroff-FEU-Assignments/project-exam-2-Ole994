import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const searchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const searchInput = styled.div`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      color: #bebebe;
    }
  }
`;

const LiveSearchFilter = (props) => {
  return (
    <SearchBarContainer>
      <searchInputContainer>
        <searchInput />
      </searchInputContainer>
    </SearchBarContainer>
  );
};
export default LiveSearchFilter;
