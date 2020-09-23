import PropsTypes from 'prop-types';
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const Time = date => distanceInWordsToNow(date.date, { addSuffix: true});

Time.propTypes = {
    date: PropsTypes.string
};

export default Time;