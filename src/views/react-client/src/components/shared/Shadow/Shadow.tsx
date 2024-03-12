import { ComponentProps, FC } from 'react';
import styles from './Shadow.module.scss';

interface IShadowProps extends ComponentProps<'div'> {}

const Shadow: FC<IShadowProps> = ({ ...rest }) => <div className={`${styles.container} ${rest.className}`} />;

export default Shadow;
