import styled from "styled-components";
export const SearchBarContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 40px auto 0;
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: honeydew;
  display: block;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 2px;
  outline: none;

  &:focus {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    border: honeydew;
    display: block;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border-radius: 2px;
    outline: none;
  }

  &:active {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    border: honeydew;
    display: block;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border-radius: 2px;
    outline: none;
  }
`;

export const ClearButton = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  font-weight: 600;
  color: #999;

  &:active {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #999;
  }

  &:focus {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #999;
  }
`;

export const AutocompleteContainer = styled.div`
  border-bottom: honeydew;
  border-left: honeydew;
  border-right: honeydew;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 2px 2px;
`;