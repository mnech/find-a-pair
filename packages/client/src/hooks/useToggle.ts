import React, { useState } from 'react';

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue((previousValue) => !previousValue);
  }

  return [value, toggleValue];
};

export default useToggle;
