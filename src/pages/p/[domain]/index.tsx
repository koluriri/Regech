import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { domain } = router.query;
  console.log(domain);

  return null;
};

export default Dashboard;
