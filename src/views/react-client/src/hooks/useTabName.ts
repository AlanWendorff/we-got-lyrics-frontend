import { APP_NAME } from '@/constants/config';
import { useEffect } from 'react';

interface IUseTabNameProps {
  tabName: string;
  dynamicInfo?: undefined | string;
}

const useTabName = ({ tabName, dynamicInfo }: IUseTabNameProps) => {
  useEffect(() => {
    if (!dynamicInfo) {
      document.title = APP_NAME;
      return;
    }

    document.title = tabName;
  }, [tabName]);
};

export default useTabName;
