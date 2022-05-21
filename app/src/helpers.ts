import { AxiosResponse } from 'axios';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const unwrapData = async <T = any>(response: Promise<AxiosResponse<T>>) => {
  const { data } = await response;

  return data;
};

const formatToHumans = (date: string) => dayjs().to(date);

export {
  unwrapData,
  formatToHumans,
};
