import type { NextPage } from 'next';
import DashboardComponent from 'components/page/Dashboard/Dashboard';
import { useRouter } from 'next/router';

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { domain } = router.query;

  return <DashboardComponent domain={String(domain)} />;
};

export default Dashboard;
