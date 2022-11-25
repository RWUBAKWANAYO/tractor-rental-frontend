import DecodeToken from '../lib/DecodeToken';

export const SaveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const GetUser = (currUser) => {
  const user = currUser || JSON.parse(localStorage.getItem('user'));
  if (!user) return null;
  return {
    token: user.token,
    info: user.info,
    expired: DecodeToken(user.token).exp,
  };
};

export const RemoveUser = () => localStorage.removeItem('user');
