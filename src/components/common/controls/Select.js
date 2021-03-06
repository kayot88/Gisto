import React from 'react';
import styled from 'styled-components';
import { baseAppColor } from 'constants/colors';
import PropTypes from 'prop-types';

const SelectInput = styled.select`
  -webkit-appearance: none;
  border: 1px solid ${baseAppColor};
  line-height: 1;
  outline: 0;
  color: ${baseAppColor};
  padding: 5px;
  border-radius: 0;
  background: linear-gradient(${baseAppColor}, ${baseAppColor}) no-repeat,
              linear-gradient(-135deg,rgba(255,255,255,0) 50%,white 50%) no-repeat,
              linear-gradient(-225deg,rgba(255,255,255,0) 50%,white 50%) no-repeat,
              linear-gradient(${baseAppColor}, ${baseAppColor}) no-repeat;
  background-color: #fff;
  background-size: 1px 100%,20px 20px,20px 20px,20px 60%;
  background-position: right 20px center,
                       right bottom,
                       right bottom,
                       right bottom;
  border: none;
  border-bottom: 1px solid ${baseAppColor};
  
  option {
    background-color: white;
  }
`;

const Select = ({
  value, onChange, className, children
}) => (
  <SelectInput className={ className }
               defaultValue={ value }
               onChange={ onChange }>
    { children }
  </SelectInput>
);

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Select;
