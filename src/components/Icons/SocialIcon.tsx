/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { Box, Fab, SvgIcon } from '@material-ui/core';

export interface SocialLinkProps {
  icon: string;
  name: string;
  url: string;
}

const SocialIcon: FC<SocialLinkProps> = ({ icon, name, url }) => {
  const iconProps = icon.split(' ') as [IconPrefix, IconName];

  return (
    <Box m={1}>
      <Fab
        style={{ boxShadow: 'none' }}
        href={url}
        key={name}
        target="_blank"
        rel="noreferrer"
        size="large"
        color="default"
      >
        <SvgIcon fontSize="medium" style={{ color: '#343A40' }}>
          <FontAwesomeIcon icon={iconProps} />
        </SvgIcon>
      </Fab>
    </Box>
  );
};

export default SocialIcon;
