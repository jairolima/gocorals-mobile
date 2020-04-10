/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, TInput} from './styles';

FontAwesome.loadFont();

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <FontAwesome name={icon} size={20} color="#CBCBCB" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
