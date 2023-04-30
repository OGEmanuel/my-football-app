import SelectClub from '@/components/select-club';
import { getAllData, getEuropesTopLeagues } from '@/helpers/api-util';

const ACTION = 'get_countries';
const leagueAction = 'get_leagues';

const CountryDetailsPage = props => {
  const { countryId, leagueDetails } = props;

  return <SelectClub countryId={countryId} leagueDetails={leagueDetails} />;
};

export const getStaticProps = async context => {
  const countryId = context.params.countryId;
  const leagueDetails = await getAllData(leagueAction, countryId);

  return {
    props: {
      countryId,
      leagueDetails,
    },
  };
};

export const getStaticPaths = async () => {
  const leagues = await getEuropesTopLeagues(ACTION);

  const paths = leagues.map(league => ({
    params: { countryId: league.country_id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default CountryDetailsPage;
