import React from 'react';
import { LocaleContext } from '../../context/localeContext';

function Products() {
  return (
    <div>
      Products page
      <LocaleContext.Consumer>
        {({ locale, setLocale }) => (
          <>
            <p>{`Current Locale is ${locale}`}</p>
            <button type="button" onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}>
              Change Locale
            </button>
          </>
        )}
      </LocaleContext.Consumer>
    </div>
  );
}

export default Products;
