import { ComponentProps, FC } from 'react';
import styles from './Gradient.module.scss';

interface IGradientProps extends ComponentProps<'div'> {
  color: string;
}

const Gradient: FC<IGradientProps> = ({ color, ...rest }) => (
  <div className={styles.container} style={{ backgroundColor: color }} {...rest} />
);

export default Gradient;
