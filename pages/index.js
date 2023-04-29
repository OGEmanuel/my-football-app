import HomePage from '@/components/home-page';
import { getEuropesTopLeagues } from '@/helpers/api-util';

const ACTION = 'get_countries';
const API_KEY =
  '7e702b279fbdfc88ba4fc2ba1c668e72409adabb24f767abbb18261e21dd593f';
export default function Home(props) {
  const { countries } = props;

  return <HomePage countries={countries} />;
}

export const getStaticProps = async () => {
  const countries = await getEuropesTopLeagues(ACTION, API_KEY);

  return {
    props: {
      countries,
    },
  };
};
