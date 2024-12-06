import { useCallback, useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import { DashboardLayout } from '../components/organisms/dashboard-layout';

export const Dashboard: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const focusSearch = useCallback(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && (event.key === 'k' || event.key === 'K')) {
      event.preventDefault();
      focusSearch();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [focusSearch]);

  return (
    <DashboardLayout ref={searchInputRef}>
      <Outlet />
    </DashboardLayout>
  );
};
