import { Button, Input } from 'antd';
import React from 'react';
import { SearchProjectLayout } from '../organisms/serach-project-layout';
import { ModelDialog } from './model-dialog';
import { SidebarMenuButton } from './sidebar-menu';

export const DashboardHeader = React.forwardRef<HTMLInputElement, {}>(
  (_, ref) => {
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
    return (
      <>
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
            <Button type="primary" onClick={() => setIsModalVisible(true)}>
              Create
            </Button>
          </div>
        </div>

        {isModalVisible && (
          <ModelDialog
            onClose={() => setIsModalVisible(false)}
            isOutsideClose={true}
            isCrossIcon={true}
            width="600px"
            height="80%"
          >
            <SearchProjectLayout />
          </ModelDialog>
        )}
      </>
    );
  },
);
