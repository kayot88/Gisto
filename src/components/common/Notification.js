import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmpty } from 'lodash/fp';

import { lightText } from 'constants/colors';

import Anchor from 'components/common/Anchor';

const Wrapper = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
`;

const Title = styled.strong`
  font-weight: 700;
`;

const Body = styled.div`
  font-weight: 300;
  margin-top: 10px;
  font-size: 14px;

  b, strong {
    font-weight: 700;
  }
`;

const Notification = ({ title, body, actions }) => (
  <Wrapper>
    { title && <Title dangerouslySetInnerHTML={ { __html: title } } /> }
    <Body dangerouslySetInnerHTML={ { __html: body } }/>
    { !isEmpty(actions) && actions.map((action) => (
      <Anchor key={ action.title } onClick={ action.action } color={ lightText }>
        { action.title }
      </Anchor>
    )) }
  </Wrapper>
);

Notification.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  actions: PropTypes.array
};

export default Notification;
