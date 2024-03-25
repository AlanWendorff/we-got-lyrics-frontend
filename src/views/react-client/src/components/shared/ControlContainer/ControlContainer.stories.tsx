import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../../../.storybook/decorators';
import ControlContainerComponent from './ControlContainer';
import AddToFav from '../AddToFav';
import Share from '../Share';

const meta = {
  title: 'shared/ControlContainer',
  component: ControlContainerComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof ControlContainerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlContainer: Story = {
  args: {
    children: (
      <>
        <AddToFav favouriteStatus={true} />
        <Share message={'message'} />
      </>
    )
  }
};

export const ControlContainerSkeleton: Story = {
  args: {
    children: (
      <>
        <AddToFav favouriteStatus={true} skeletonStatus={true} />
        <Share message={''} skeletonStatus={true} />
      </>
    )
  }
};
