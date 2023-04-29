import HomePage from '@/components/home-page';
import { getEuropesTopLeagues } from '@/helpers/api-util';

const ACTION = 'get_countries';

export default function Home(props) {
  const { countries } = props;

  return <HomePage countries={countries} />;
}

export const getStaticProps = async () => {
  const countries = await getEuropesTopLeagues(ACTION);

  return {
    props: {
      countries,
    },
  };
};
