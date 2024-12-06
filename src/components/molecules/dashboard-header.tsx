import { Button, Input } from 'antd';
import React from 'react';
import { SidebarMenuButton } from './sidebar-menu';

export const DashboardHeader = React.forwardRef<HTMLInputElement, {}>(
  (_, ref) => {
    return (
      <div className="flex items-center justify-between md:justify-end md:mt-4">
        <div className="md:hidden">
          <SidebarMenuButton />
        </div>
        <div className="flex items-center gap-4">
          <Input
            ref={ref} // Forward the ref to the Input component
            type="text"
            placeholder="Search in workspace"
            className="rounded px-3 py-1 text-black"
          />
          <Button type="primary">Create</Button>
        </div>
      </div>
    );
  },
);
