import { useEffect, useState } from 'react';

const SelectClub = props => {
  const { countryId, leagueDetails, leagueClubDetails } = props;
  const [mensTopflightLeague, setMensTopflightLeague] = useState([]);

  useEffect(() => {
    if (countryId === '44') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '152')
      );
    } else if (countryId === '6') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '302')
      );
    } else if (countryId === '3') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '168')
      );
    } else if (countryId === '4') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '175')
      );
    } else if (countryId === '82') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '244')
      );
    } else if (countryId === '92') {
      setMensTopflightLeague(
        leagueDetails
          .map(details => details)
          .find(details => details.league_id === '266')
      );
    }
  }, [countryId]);

  //   console.log(mensTopflightLeague);

  return (
    <>
      {mensTopflightLeague.length < 1 && <p>Loading...</p>}
      <p>League name: {mensTopflightLeague.league_name}</p>
      <p>League season: {mensTopflightLeague.league_season}</p>
      <img src={mensTopflightLeague.league_logo} alt="League Logo" />
      <img src={mensTopflightLeague.country_logo} alt="Country Logo" />
      {leagueClubDetails.map(detail => (
        <div key={detail.team_key}>
          <p>Team Name: {detail.team_name}</p>
          <img src={detail.team_badge} alt="" />
          ))
        </div>
      ))}
      <div></div>
    </>
  );
};

export default SelectClub;
