import React, { useEffect, useState, useCallback } from 'react';
import { getLocalizedKey } from '../../services/translationService';
import MetaTags from 'react-meta-tags';

export default function MainPage({locale}) {
    const [localeData, setLocaleData] = useState([]);

    const getLocalizedValue = useCallback((key) => {
        if (localeData.length) {
            return localeData.find(el => el.key === key)?.value
        }
    }, [localeData]);

    useEffect(() => {
      getKey();
    }, [locale])

    useEffect(() => {
        if (localeData) {
            document.title = getLocalizedValue('title');
            console.log('locale:', localeData)
        }
    }, [localeData, getLocalizedValue])

    const getKey = async () => {
        const result = await getLocalizedKey('main', locale);
        setLocaleData(result.data);
    }
    return (
        <div>
            <MetaTags>
                <title>{getLocalizedValue('head-title')}</title>
                <meta name="description" content={getLocalizedValue('head-description')} />
            </MetaTags>
            <p>{getLocalizedValue('paragraph')}</p>
            <img alt='' src={getLocalizedValue('image')} />
        </div>
    )
}