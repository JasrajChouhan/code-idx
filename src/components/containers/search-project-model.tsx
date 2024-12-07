import { useState } from 'react';
import { ModelDialog } from '../molecules/model-dialog';
import { SearchProjectLayout } from '../organisms/serach-project-layout';

export const SearchProjectModel = () => {
  const [isVisiable, setIsVisiable] = useState<boolean>(false);
  return (
    <>
      {isVisiable && (
        <ModelDialog
          onClose={() => setIsVisiable(true)}
          isCrossIcon={true}
          isOutsideClose={true}
          height={'auto'}
          width={'80%'}
        >
          <SearchProjectLayout />
        </ModelDialog>
      )}
    </>
  );
};
