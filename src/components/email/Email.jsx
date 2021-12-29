import React from 'react';
import PropTypes from 'prop-types';

import { StyledLinkWrapper } from './Email.styled';
import { Side } from '../'

const Email = () => {
    const isHome = true;
    const email = 'f4vazquez@gmail.com';

    return(
        <Side isHome={isHome} orientation="right">
            <StyledLinkWrapper>
                <a href={`mailto:${email}`}>{email}</a>
            </StyledLinkWrapper>
        </Side>
    );
};
  
Email.propTypes = {
    isHome: PropTypes.bool,
};
  
export default Email;