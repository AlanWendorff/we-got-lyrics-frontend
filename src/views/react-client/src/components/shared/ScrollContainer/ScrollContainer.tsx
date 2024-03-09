/**
 * This component is unused
 */

import { ComponentProps, FC } from 'react';
import styles from './ScrollContainer.module.scss';

interface IScrollContainerProps extends ComponentProps<'div'> {}

const ScrollContainer: FC<IScrollContainerProps> = ({ children }) => <div className={styles.container}>{children}</div>;

export default ScrollContainer;
