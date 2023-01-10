import Link from 'next/link';
import { FC } from 'react';
import {
  getProjectsByUidReturnSchema,
  getProjectsByUidReturn,
} from 'utils/back-end/module/project/getProjectsByUid.schema';
import { useGet } from '~/hooks/RESThandler';

const Projects: FC = () => {
  const fetch = useGet<getProjectsByUidReturn>(
    `projects`,
    getProjectsByUidReturnSchema,
  );

  if (fetch.status === 'loading') return <h2>Loading....</h2>;
  if (fetch.status === 'error') return <h2>{fetch.error.message}</h2>;

  return (
    <div>
      <h2>
        {fetch.data.map((project) => (
          <p key={project.domain}>
            <Link href={`/p/${project.domain}`}>
              <a href={`/p/${project.domain}`}>
                {project.prefix}「{project.name}」
              </a>
            </Link>
          </p>
        ))}
      </h2>
    </div>
  );
};

export default Projects;
