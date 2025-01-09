import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// Context 생성
const FormContext = createContext({});
const { Provider, Consumer } = FormContext;

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
