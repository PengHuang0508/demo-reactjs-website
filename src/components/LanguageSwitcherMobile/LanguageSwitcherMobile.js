/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../../actions/intl';
import s from './LanguageSwitcherMobile.css';

function LanguageSwitcherMobile({ currentLocale, availableLocales, setLocale }) {
  const isSelected = locale => locale === currentLocale;
  const localeDict = {
    'en-US': 'EN ',
    'zh-CN': ' 中',
    //'cs-CZ': 'Česky',
  };
  const localeName = locale => localeDict[locale] || locale;

  const style = {
    cursor: 'pointer',


  };

  return (
    <span style={style}
      onClick={(e) => {
        {isSelected(availableLocales[0]) ? (
          setLocale({'locale' : availableLocales[1]})) : (
          setLocale({'locale' : availableLocales[0]})) 
        }}}>
      Switch Language
    </span>
   );
}

LanguageSwitcherMobile.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapState = state => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

export default connect(mapState, mapDispatch)(LanguageSwitcherMobile);