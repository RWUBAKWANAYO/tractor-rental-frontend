import jwt_decode from 'jwt-decode';

const DecodeToken = (token) => {
  const decoded = jwt_decode(token.split(' ')[1]);
  const newExp = decoded.exp < (Date.now() - 1000 * 60 * 5) / 1000;
  return { ...decoded, exp: newExp };
};
export default DecodeToken;
