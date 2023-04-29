import { getCountryById } from '@/helpers/api-util';
import { selectCountry } from '@/redux-store/features/countriesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ACTION = 'get_countries';
const API_KEY =
  '7e702b279fbdfc88ba4fc2ba1c668e72409adabb24f767abbb18261e21dd593f';

const CountryDetailsPage = props => {
  const { countryDetails } = props;
  console.log(countryDetails);
  //   const dispatch = useDispatch();
  //   const selectCountry = useSelector(state => state.select.country);

  //   useEffect(() => {
  //     dispatch(selectCountry(countries));
  //   }, []);

  return (
    <>
      <h1>Country Details</h1>
    </>
  );
};

export const getStaticProps = async context => {
  const countries = await getEuropesTopLeagues(ACTION, API_KEY);
  const countryId = context.params.countryId;
  const countryDetails = getCountryById(countries, countryId);

  return {
    props: {
      countryDetails,
    },
  };
};

// export const getStaticPaths =

export default CountryDetailsPage;
