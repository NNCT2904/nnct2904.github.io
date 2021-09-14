import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
    marginTop: '1.5rem',
    marginBottom: '3rem',
  },
  sectionheader: {
    marginBottom: 36,
    // fontWeight: 'bold',
  },
  heading4: {
    // fontWeight: 'bold',
  },
  heading5: {
    // fontWeight: 'bold',
  },
  subheading5: {
    // fontWeight: 'bold',
    color: 'gray',
  },
  list: {
    color: 'gray',
    maxWidth: 700,
  },
  socialList: {
    fontSize: '3rem',
  },
  duration: {
    color: 'primary',
    fontSize: 'medium',
    margin: 1,
  },
  roundedButton: {
    borderRadius: '5em',
  },
});

export default useStyles;
