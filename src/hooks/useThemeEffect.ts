import { useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';

export function useThemeEffect() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
}
