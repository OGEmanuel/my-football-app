import { getAllData, getEuropesTopLeagues } from '@/helpers/api-util';
import { useEffect, useState } from 'react';

const ACTION = 'get_countries';
const leagueAction = 'get_leagues';

const CountryDetailsPage = props => {
  const [mensTopflightLeague, setMensTopflightLeague] = useState([]);
  const { countryId, leagueDetails } = props;

  useEffect(() => {
    if (countryId === '44') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '152')
      );
    } else if (countryId === '82' && countryId === '92') {
      setMensTopflightLeague(leagueDetails[0]);
    } else setMensTopflightLeague(leagueDetails[1]);
  }, [countryId]);

  console.log(mensTopflightLeague);

  return (
    <>
      {mensTopflightLeague.length < 1 && <p>Loading...</p>}
      <p>League name: {mensTopflightLeague.league_name}</p>
      <p>League season: {mensTopflightLeague.league_season}</p>
      <img src={mensTopflightLeague.league_logo} alt="League Logo" />
      <img src={mensTopflightLeague.country_logo} alt="Country Logo" />
    </>
  );
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
