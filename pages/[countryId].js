import SelectClub from '@/components/select-club';
import { getAllData, getEuropesTopLeagues } from '@/helpers/api-util';

const GET_COUNTRIES = 'get_countries';
const GET_LEAGUES = 'get_leagues';
const GET_TEAMS = 'get_teams';
let leagueId = '';

const CountryDetailsPage = props => {
  const { countryId, leagueDetails, leagueClubDetails } = props;

  return (
    <SelectClub
      countryId={countryId}
      leagueDetails={leagueDetails}
      leagueClubDetails={leagueClubDetails}
    />
  );
};

export const getStaticProps = async context => {
  const countryId = context.params.countryId;
  const leagueDetails = await getAllData(GET_LEAGUES, countryId);

  if (countryId === '44') leagueId = '152';
  if (countryId === '6') leagueId = '302';
  if (countryId === '3') leagueId = '168';
  if (countryId === '4') leagueId = '175';
  if (countryId === '82') leagueId = '244';
  if (countryId === '92') leagueId = '266';

  const leagueClubDetails = await getAllData(GET_TEAMS, countryId, leagueId);

  return {
    props: {
      countryId,
      leagueDetails,
      leagueClubDetails,
    },
  };
};

export const getStaticPaths = async () => {
  const leagues = await getEuropesTopLeagues(GET_COUNTRIES);

  const paths = leagues.map(league => ({
    params: { countryId: league.country_id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default CountryDetailsPage;
