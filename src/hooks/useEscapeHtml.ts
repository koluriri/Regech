const useEscapeHtml = () => (str: string) => {
  let result = str;
  result = result.replace(/&/g, '&amp;');
  result = result.replace(/>/g, '&gt;');
  result = result.replace(/</g, '&lt;');
  result = result.replace(/"/g, '&quot;');
  result = result.replace(/'/g, '&#x27;');
  result = result.replace(/`/g, '&#x60;');

  return result;
};

export default useEscapeHtml;
