import { ComponentProps, FC } from 'react';
import styles from './ControlContainer.module.scss';

interface IControlContainerProps extends ComponentProps<'div'> {}

const ControlContainer: FC<IControlContainerProps> = ({ children, ...rest }) => (
  <div className={styles.container} {...rest}>
    {children}
  </div>
);
export default ControlContainer;
