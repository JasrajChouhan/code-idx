import { Card, Flex } from 'antd';
import { ImBackward } from 'react-icons/im';
import { RxCrossCircled } from 'react-icons/rx';

export interface ModelDialogProps {
  onClose: () => void;
  isOutsideClose?: boolean;
  isCrossIcon?: boolean;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  isBackArrow?: boolean;
  onBack?: () => void;
}

export const ModelDialog: React.FC<ModelDialogProps> = ({
  onClose,
  isOutsideClose = true,
  isCrossIcon = true,
  children,
  width = '400px',
  height = 'auto',
  isBackArrow = false,
  onBack,
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
          <Flex
            justify={isBackArrow && isCrossIcon ? 'space-between' : 'flex-end'}
            align="center"
            className="relative"
          >
            {isBackArrow && (
              <Flex className="cursor-pointer mb-2" onClick={onBack}>
                <ImBackward size={30} />
              </Flex>
            )}

            {isCrossIcon && (
              <Flex className="cursor-pointer mb-2" onClick={onClose}>
                <RxCrossCircled size={30} />
              </Flex>
            )}
          </Flex>
          {/* Modal Content */}
          <div>{children}</div>
        </Card>
      </div>
    </div>
  );
};
