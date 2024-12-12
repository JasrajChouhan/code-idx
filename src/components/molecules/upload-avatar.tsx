import {
  Avatar,
  Form,
  Input,
  Progress,
  Upload,
  message,
  notification,
} from 'antd';
import { useState } from 'react';
import { useUploadAvatar } from '../../hooks/api/mutaion/useUploadAvatar';

export const UploadAvatar = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const { mutateAsync: uploadUserAvatar, isPending } = useUploadAvatar();

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isSizeValid = file.size / 1024 / 1024 < 2; // 2 MB limit

    if (!isImage) {
      message.error('You can only upload image files!');
      return Upload.LIST_IGNORE;
    }

    if (!isSizeValid) {
      message.error('Image must be smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }

    return isImage && isSizeValid;
  };

  // upload the image
  const handleChange = async (info: any) => {
    const { file } = info;

    // Simulate upload progress
    setProgress(0);
    setTimeout(() => {
      setProgress(100);
      setFile(file.originFileObj);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file.originFileObj);
    }, 1000);

    // Upload the image
    try {
      const formData = new FormData();
      formData.append('avatar', file.originFileObj);
      const response = await uploadUserAvatar(formData);
      console.log(response);
      notification.success({
        message: 'Successfully uploaded image',
        description: 'Your avatar has been updated.',
      });
    } catch (error) {
      const errorData = error?.props?.response?.data;
      console.log(error);

      notification.error({
        message: 'Avatar upload failed',
        description:
          errorData?.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center mt-20 w-full h-20 justify-center ">
        <Form layout="vertical" className="p-4">
          <Form.Item label="Upload Avatar" valuePropName="fileList">
            <Upload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              className="flex justify-center items-center w-full border"
            >
              {preview ? (
                <div className="w-full">
                  <div>
                    <Avatar
                      src={preview}
                      size={100}
                      style={{ borderRadius: '100%' }}
                      alt="avatar"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item>
            <Input hidden value={file ? file.name : ''} />
          </Form.Item>
        </Form>
      </div>

      <div className="relative">
        <Progress
          type="circle"
          percent={progress}
          size={40}
          status={isPending ? 'active' : undefined}
        />
      </div>
    </div>
  );
};
