import { AxiosImageUpload } from './AxiosInstance';

const CloudinaryUpload = async (userFile) => {
  try {
    const formData = new FormData();
    formData.append('file', userFile);
    formData.append('upload_preset', `${process.env.REACT_APP_UPLOAD_PRESET}`);
    formData.append('cloud_name', `${process.env.REACT_APP_CLOUD_NAME}`);
    const res = await AxiosImageUpload({
      url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      data: formData,
    });
    return res.data;
  } catch (error) {
    return { status: 'error', error };
  }
};

export default CloudinaryUpload;
