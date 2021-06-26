import React, { useCallback, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { themeModifier } from '../../theme/utils';
import { filterInvalidKeys, getIsSingleKeyChange } from '../../services/input-output-text/utils';
import { selectTotalOutput, selectTotalInput } from '../../services/machine/machine-selector';
import { handleSingleRotorRotation, handleFullRotorRotation } from '../../services/machine/machine-slice';

const $Container = styled.div`
  p {
    color: ${p => themeModifier(p.theme.colors.white)}
  }
`;

const $TextAreaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => themeModifier(p.theme.baseline, 1)};
  
  textarea {
    flex: 1;
    font-size: ${p => themeModifier(p.theme.font.size, 1.5)};
    text-transform: uppercase;
    height: 6em;
    max-width: 30em;
    min-width: 20em;
    margin: ${p => themeModifier(p.theme.baseline, 0.5)};
    resize: none;
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.smallTablet}) {
    textarea {
      height: 4em;
      min-width: 10em;
    }
  }
`;

const $InputTextArea = styled.textarea`
  height: 10em;
`;

const $OutputTextArea = styled.textarea`
  background-color: ${p => themeModifier(p.theme.colors.white)};
`;

export const InputOutputTextArea = () => {
  const totalOutput = useSelector(selectTotalOutput);
  const totalInput = useSelector(selectTotalInput);
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const filteredInput = filterInvalidKeys(e.target.value);
    const singleKeyChange = getIsSingleKeyChange(totalInput, filteredInput);

    if (singleKeyChange) {
      // only take the last character; as it's the only new one.
      dispatch(handleSingleRotorRotation(filteredInput.substr(-1)));
    } else {
      // re-encode the entire input
      dispatch(handleFullRotorRotation(filteredInput));
    }
  }, [totalInput, dispatch]);

  return (
    <$Container>
      <p>{'Enter text below to be encypted or decrypted.'}</p>
      <$TextAreaContainer>
        <$InputTextArea onChange={handleChange} spellCheck={false} placeholder={'Input text here...'} />
        <$OutputTextArea disabled value={totalOutput} placeholder={'Output here...'} />
      </$TextAreaContainer>
    </$Container>
  );
};
