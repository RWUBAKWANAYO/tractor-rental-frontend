const TextMinimizer = (text, num) => (
  text.length > num ? `${text.slice(0, num)}...` : text
);
export default TextMinimizer;
