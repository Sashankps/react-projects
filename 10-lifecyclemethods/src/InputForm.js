import React from 'react';
import useFormControl from './InputFormHook';

function Form() {
  const [email, updateEmail, resetEmail] = useFormControl('');
  const [password, updatePass, resetPass] = useFormControl('');
  return (
    <div>
      <h1>
        Email is {email}, Password is {password}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePass} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPass}>Reset Password</button>
    </div>
  );
}

export default Form;
