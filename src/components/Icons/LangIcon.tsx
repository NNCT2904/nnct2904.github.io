import type { FC } from 'react';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface LangIconProps {
  name: string;
}
const LangIcon: FC<LangIconProps> = ({ name }) => {
  const iconProps = ['fab', name] as [IconPrefix, IconName];

  return (
    <Box fontSize="3rem" m={0.5}>
      <FontAwesomeIcon icon={iconProps} />
    </Box>
  );
};

export default LangIcon;
