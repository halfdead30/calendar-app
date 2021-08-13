import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const SearchFieldWrapper = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  background-color: #6a6a6c;
  border-radius: 4px 0 0 4px;
  border: none;
  cursor: pointer;
  svg {
    fill: #d9d9da;
    padding: 2px;
  }
`;

const InputWrapper = styled.input`
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #6a6a6c;
  color: #d9d9da;
  outline: none;
`;

const SearchField = () => {
  return (
    <SearchFieldWrapper>
      <LabelWrapper htmlFor="search">
        <SearchIcon />
      </LabelWrapper>
      <InputWrapper type="text" id="search" placeholder="Search" />
    </SearchFieldWrapper>
  );
};

export default SearchField;
