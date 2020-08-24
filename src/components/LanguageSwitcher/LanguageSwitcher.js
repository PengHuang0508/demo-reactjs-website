/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../../actions/intl';
import s from './LanguageSwitcher.css';

function LanguageSwitcher({ currentLocale, availableLocales, setLocale }) {
  const isSelected = locale => locale === currentLocale;
  const localeDict = {
    'en-US': 'English',
    'zh-CN': '中文',
  };
  const localeName = locale => localeDict[locale] || locale;
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '8vw',
  }
  const selectedLocaleStyle = {
    cursor: "default",
    color: 'white',
    fontWeight: 'bold',
  }
  const availableLocaleStyle = {
    color: '#aaa',
  }

  return (
      <div style={containerStyle}>
        {availableLocales.map(locale => (
          <div key={locale}>
            {isSelected(locale) ? (
              <div 
                style={selectedLocaleStyle}>{localeName(locale)}</div>
            ) : (
              // github.com/yannickcr/eslint-plugin-react/issues/945
              // eslint-disable-next-line react/jsx-indent
              <a href={`?lang=${locale}`}
                onClick={(e) => {
                  setLocale({ locale });
                  e.preventDefault();
                }}
                style={availableLocaleStyle}
              >{localeName(locale)}</a>
            )}
            {' '}
          </div>
        ))}
      </div>
   );
}

LanguageSwitcher.propTypes = {
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

export default connect(mapState, mapDispatch)(LanguageSwitcher);
