import { useEffect, useState } from 'react';

const SelectClub = props => {
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

  //   console.log(mensTopflightLeague);
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

export default SelectClub;
