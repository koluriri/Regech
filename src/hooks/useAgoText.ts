import { useLocale } from './useLocale';

const useAgoText = () => (datetime: string) => {
  const { t } = useLocale();

  const from = new Date(datetime);

  const diff = new Date().getTime() - from.getTime();
  const elapsed = new Date(diff);

  if (elapsed.getUTCFullYear() - 1970) {
    return `${elapsed.getUTCFullYear() - 1970}${t.YEARS_AGO}`;
  }
  if (elapsed.getUTCMonth()) {
    return `${elapsed.getUTCMonth()}${t.MONTHS_AGO}`;
  }
  if (elapsed.getUTCDate() - 1) {
    return `${elapsed.getUTCDate() - 1}${t.DAYS_AGO}`;
  }
  if (elapsed.getUTCHours()) {
    return `${elapsed.getUTCHours()}${t.HOURS_AGO}`;
  }
  if (elapsed.getUTCMinutes()) {
    return `${elapsed.getUTCMinutes()}${t.MINUTES_AGO}`;
  }

  return `${elapsed.getUTCSeconds()}${t.NOW}`;
};

export default useAgoText;
