import React from 'react';

import { StyledSocialList } from './Socials.styled';
import { Side } from '../';
import { Icon } from '../icons';


const Socials =()=> {
    let socialMedia = [
        {
            name: 'GitHub',
            url: 'https://github.com/fevazquez',
          },
          {
            name: 'Instagram',
            url: 'https://www.instagram.com/itsfernanflow/',
          },
        //   {
        //     name: 'Linkedin',
        //     url: 'https://www.linkedin.com/in/',
        //   },
    ];

    const isHome = true;
    return (
        <Side isHome={isHome} orientation="left">
            <StyledSocialList>
                {socialMedia &&
                    socialMedia.map(({ url, name }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                            <Icon name={name} />
                        </a>
                    </li>
                    ))}
            </StyledSocialList>
        </Side>
    );
}

export default Socials;