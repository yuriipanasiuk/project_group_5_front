import { useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { RiCloseCircleLine } from 'react-icons/ri';

import {
  SearchForm,
  SearchField,
  SearchBtn,
  InputLabel,
} from './NewsForm.styled';

export const NewsForm = ({ onSubmit, onClear }) => {
  const [value, setValue] = useState('');
  const windowWidth = useRef(window.innerWidth);
  const smallScreen = windowWidth.current < 768;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  }

  function handleInput(e) {
    setValue(e.target.value.trim());
    onSubmit(e);
  }

  const handleClear = e => {
    setValue('');
    onClear();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <InputLabel htmlFor="search">
        <SearchField
          onInput={e => handleInput(e)}
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          value={value}
        />
        <SearchBtn type={smallScreen ? 'submit' : 'button'}>
          {value &&
            !smallScreen(
              <>
                <RiCloseCircleLine size={24} onClick={handleClear} />

                <GoSearch size={20} />
              </>
            )}
        </SearchBtn>
      </InputLabel>
    </SearchForm>
  );
};
