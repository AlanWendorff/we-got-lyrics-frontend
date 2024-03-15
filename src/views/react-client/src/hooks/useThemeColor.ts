import { useEffect } from 'react';

interface IUseThemeColorProps {
  color: string;
  dynamicInfo?: undefined | string;
}

const useThemeColor = ({ color, dynamicInfo }: IUseThemeColorProps) => {
  useEffect(() => {
    const themeColor = document.querySelector("meta[name='theme-color']") as HTMLMetaElement;

    if (!dynamicInfo) {
      themeColor.content = '#000000';
      return;
    }

    themeColor.content = color;
  }, [color]);
};

export default useThemeColor;
