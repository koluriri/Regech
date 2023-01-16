/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useLocale } from '~/hooks/useLocale';
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
