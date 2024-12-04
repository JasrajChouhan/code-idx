import { Card, Flex } from 'antd';
import { RxCrossCircled } from 'react-icons/rx';

export interface ModelDialogProps {
  onClose: () => void;
  isOutsideClose?: boolean;
  isCrossIcon?: boolean;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

export const ModelDialog: React.FC<ModelDialogProps> = ({
  onClose,
  isOutsideClose = true,
  isCrossIcon = true,
  children,
  width = '400px',
  height = 'auto',
}) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
      onClick={isOutsideClose ? onClose : undefined}
    >
      {/* Prevent click-through on the modal */}
      <div onClick={(e) => e.stopPropagation()}>
        <Card
          style={{
            width,
            height,
            maxWidth: '90%',
            maxHeight: '90%',
            overflow: 'auto',
          }}
          className="shadow-lg rounded-lg relative bg-white"
        >
          {isCrossIcon && (
            <Flex justify="end" className="top-2 right-2 cursor-pointer mb-2">
              <RxCrossCircled size={30} onClick={onClose} />
            </Flex>
          )}
          {/* Modal Content */}
          <div>{children}</div>
        </Card>
      </div>
    </div>
  );
};
