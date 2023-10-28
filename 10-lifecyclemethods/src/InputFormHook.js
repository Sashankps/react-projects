import React, { useState } from 'react';

function useFormControl(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
}

export default useFormControl;
