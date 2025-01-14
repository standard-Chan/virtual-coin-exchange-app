import React, { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

// Context 생성
const FormContext = createContext({});
const { Provider, Consumer } = FormContext;

/* 
onSubmit
*/

/* 
FormProvider 설명
form 대신에 사용하는 커스텀 컴포넌트
*/

const FormProvider = ({ initValues, validate, onSubmit, children }) => {
  const [values, setValues] = useState(initValues || {});
  const [errors, setErrors] = useState({});

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (Object.values(errors).length === 0) {
        onSubmit(values);
      }
    },
    [errors, onSubmit, values]
  );

  /*  onChange
  name과 value를 받아서, state변수 values[name]을 갱신하는 함수
  값을 변경하는 <Select/>와 <Input/>에서 사용함 
  */
  const onChange = useCallback(
    (name, updatedValue) => {
      setValues((prevValues) => {
        const newValues = {
          ...prevValues,
          [name]: updatedValue,
        };
        if (validate) {
          setErrors(validate(newValues));
        }
        return newValues;
      });
    },
    [validate]
  );

  const reset = useCallback(() => {
    setValues({});
    setErrors({});
  }, []);

  return (
    <Provider
      value={{
        values,
        errors,
        onChange,
        reset,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </Provider>
  );
};

FormProvider.propTypes = {
  initValues: PropTypes.object,
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export { Consumer as FormConsumer };
export default FormProvider;
