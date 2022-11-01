const TextMinimizer = (text) => (text.length > 90 ? `${text.slice(0, 90)}...` : text);

export default TextMinimizer;
