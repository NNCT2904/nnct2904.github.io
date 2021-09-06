import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    SectionContent: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      align: 'center',
      minHeight: '100vh',
    },
    SectionContentmobile: {
      display: 'flex',
      flexGrow: 1,
      align: 'center',
      maxWidth: '80vw',
    },
  })
);

export default useStyles;
