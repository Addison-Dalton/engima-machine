import React, { useCallback, KeyboardEvent, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { themeModifier } from '../../theme/utils';
import { getIsValidKey, getIsNonEncodableKey } from '../../services/input-output-text/utils';
import { selectTotalOutput } from '../../services/machine/machine-selector';
import { handleRotorRotation, handleNonEncodableKeys } from '../../services/machine/machine-slice';

const $Container = styled.div`
  p {
    color: ${p => themeModifier(p.theme.colors.white)}
  }
`;

const $TextAreaContainer = styled.div`
  display: flex;
  padding: ${p => themeModifier(p.theme.baseline, 1)};
  
  textarea {
    flex: 1;
    font-size: ${p => themeModifier(p.theme.font.size, 1.5)};
    text-transform: uppercase;
    height: 10em;
    width: 30em;
    margin: ${p => themeModifier(p.theme.baseline, 0.5)};
    resize: none;
  }
`;

const $InputTextArea = styled.textarea`
  height: 10em;
`;

const $OutputTextArea = styled.textarea`
  background-color: ${p => themeModifier(p.theme.colors.white)};
`;

export const InputOutputTextArea = () => {
  const [inputText, setInputText] = useState('');
  const totalOutput = useSelector(selectTotalOutput);
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }, [setInputText]);

  const handleKeyInput = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    const inputKey = e.key;

    // prevent invalid keys
    const isValidKey = getIsValidKey(inputKey);
    if (!isValidKey) {
      e.preventDefault();
      return;
    }

    // handle keys accordingly
    if (getIsNonEncodableKey(inputKey)) {
      const inputKeyTyped = inputKey as NonEncodableKey;

      dispatch(handleNonEncodableKeys(inputKeyTyped));
    } else {
      dispatch(handleRotorRotation(inputKey));
    }
  }, [dispatch, inputText]);

  return (
    <$Container>
      <p>{'Enter text below to be encypted'}</p>
      <$TextAreaContainer>
        <$InputTextArea onKeyDown={handleKeyInput} />
        <$OutputTextArea disabled value={totalOutput} />
      </$TextAreaContainer>
    </$Container>
  );
};
