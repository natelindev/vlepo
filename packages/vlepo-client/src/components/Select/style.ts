import styled from '@emotion/styled';

type OptionType = {
  active: boolean;
};
export const Option = styled.option<OptionType>`
  border: ${(props) => (props.active ? `1px solid ${props.theme.colors.primary}` : 'none')};
`;

export const BaseSelect = styled.select`
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.muted};
  vertical-align: middle;
  background: ${(props) =>
    `${props.theme.colors.backgroundMuted}
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23${props.theme.colors.text.slice(
      1,
    )}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
    no-repeat right 0.75rem center/8px 10px`};
  border-radius: ${(props) => `${props.theme.radii.default}px`};
  border: 1px solid ${(props) => props.theme.colors.muted};
  appearance: none;

  &:focus {
    outline: 0;
    box-shadow: ${(props) => props.theme.shadows.Input};
  }
`;
