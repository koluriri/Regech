/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import { FC } from 'react';
import useLocale from '~/hooks/useLocale';
import Button from '../../../ui/Button/Button';

const GoTopButton: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  return (
    <Button variant="tertiary" onClick={() => router.push('/')} id="gotop">
      ← {t.GOTOP}
    </Button>
  );
};

export default GoTopButton;
