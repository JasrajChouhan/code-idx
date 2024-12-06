import { MenuOutlined } from '@ant-design/icons';
import React from 'react';
import { ModelDialog } from './model-dialog';
import { Sidebar } from './sidebar';

export const SidebarMenuButton = () => {
  const [isSidebarVisiable, setIsSidebarVisiable] =
    React.useState<boolean>(false);

  return (
    <>
      <div className="sidebar-menu-button cursor-pointer">
        <MenuOutlined onClick={() => setIsSidebarVisiable(true)} />
      </div>
      {isSidebarVisiable && (
        <div className="flex justify-start">
          <ModelDialog
            onClose={() => setIsSidebarVisiable(false)}
            isOutsideClose={true}
            isCrossIcon={true}
            width="400px"
            height="auto"
          >
            <Sidebar onClose={() => setIsSidebarVisiable(false)} />
          </ModelDialog>
        </div>
      )}
    </>
  );
};
