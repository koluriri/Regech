/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useState } from 'react';

import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  RequiredBody,
  RequiredBodySchema,
} from '~/utils/back-end/module/project/createProject.schema';
import { useREST } from '~/hooks/RESThandler';
import { useSWRConfig } from 'swr';

const CreateProject: FC = () => {
  const { mutate } = useSWRConfig();
  const { post } = useREST();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RequiredBody>({
    defaultValues: {
      name: '',
      prefix: 'ドラマ',
    },
    resolver: zodResolver(RequiredBodySchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<RequiredBody> = (data) => {
    post('projects', data, async () => {
      await mutate('/api/projects');
      reset();
      setLoading(false);
    }).catch((error: Error) => {
      alert(`error: ${error.message}`);
    });
    setLoading(true);
  };

  return (
    <div>
      <h2>プロジェクトを作成する</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        style={loading ? { opacity: 0.5 } : undefined}
      >
        <div className={errors.name !== undefined ? 'error' : ''}>
          <label htmlFor="name">
            作品名
            <input id="name" type="text" {...register('name')} />
          </label>
          <p>{errors.name?.message}</p>
        </div>
        <div className={errors.prefix !== undefined ? 'error' : ''}>
          <label htmlFor="prefix">
            種別
            <input id="prefix" type="text" {...register('prefix')} />
          </label>
          <p>{errors.prefix?.message}</p>
        </div>
        <div className={errors.domain !== undefined ? 'error' : ''}>
          <label htmlFor="domain">
            ドメイン
            <input id="domain" type="text" {...register('domain')} />
          </label>
          <p>{errors.domain?.message}</p>
        </div>
        <div>
          <button type="submit">作成</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
