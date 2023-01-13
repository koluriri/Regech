const useAgoText = () => (datetime: string) => {
  const from = new Date(datetime);

  const diff = new Date().getTime() - from.getTime();
  const elapsed = new Date(diff);

  if (elapsed.getUTCFullYear() - 1970) {
    return `${elapsed.getUTCFullYear() - 1970}年前`;
  }
  if (elapsed.getUTCMonth()) {
    return `${elapsed.getUTCMonth()}ヶ月前`;
  }
  if (elapsed.getUTCDate() - 1) {
    return `${elapsed.getUTCDate() - 1}日前`;
  }
  if (elapsed.getUTCHours()) {
    return `${elapsed.getUTCHours()}時間前`;
  }
  if (elapsed.getUTCMinutes()) {
    return `${elapsed.getUTCMinutes()}分前`;
  }

  return `${elapsed.getUTCSeconds()}たった今`;
};

export default useAgoText;
