import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import LogoLight from '../assets/images/logo_substrate.svg';
import LogoDark from '../assets/images/logo_substrate_onDark.svg';

interface Props {
  theme: boolean;
}

const useStyles = makeStyles({
	root: {
		display: 'block',
		width: '120px',
		'& img': {
			maxWidth: '100%',
		},
	},
});

const LogoSubstrate: React.FunctionComponent<Props> = ({ theme }: Props) => {
	const classes = useStyles();
	return  (
		<Link href='http://substrate.io/' target='_blank' className={classes.root}>
			{theme ? <LogoLight /> : <LogoDark />}
		</Link>
	);
};

export default LogoSubstrate;
