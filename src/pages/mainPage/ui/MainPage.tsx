import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { CurrencyConverter } from 'widgets/CurrencyConverter';

import cls from './MainPage.module.scss';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div className={cls.main}>
      <CurrencyConverter />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.908232644875!2d49.10635509689098!3d55.788463532498255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2296779501%3A0xe21e4dab1e2051e4!2sMdm%20Bank!5e0!3m2!1sen!2sde!4v1683228210561!5m2!1sen!2sde'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='bank'
      />
      <a style={{ marginRight: 50 }} href='http://localhost/site/signup.php'>
        {t('registration')}
      </a>
      <a style={{ marginRight: 50 }} href='http://localhost/site/index.php'>
        {t('autorization')}
      </a>
    </div>
  );
});

export default MainPage;
