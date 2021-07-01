import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

import { themeModifier } from '../../theme/utils';

type Props = {
  options: SelectOption[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  selectLabel?: string;
};

const $Select = styled.select``;

const $Option = styled.option``;

export const DropdownSelection: React.FC<Props> = ({
  options,
  handleChange,
  selectLabel
}) => {
  const defaultSelectId = `select-${selectLabel}`;
  const selectId = selectLabel ? defaultSelectId : undefined;
  return (
    <>
      {selectLabel && <label htmlFor={defaultSelectId}>{selectLabel}</label>}
      <$Select onChange={handleChange} id={selectId} defaultValue={0}>
        {options.map(o => (
          <$Option key={o.name} value={o.value}>
            {o.name}
          </$Option>
        ))}
      </$Select>
    </>
  );
};
