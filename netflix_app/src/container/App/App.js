import React from 'react';
import Card from '../../components/Card';
import image from '../../components/images/bhaskar1.jpeg';

const App = () => {
  return (
    <div>
      <Card
        imgSrc='https://wallpapercave.com/wp/wp4056410.jpg'
        title=' A Netflix Original Series'
        sname='DARK'
        link='https://www.netflix.com/in/title/80990668?source=35'
      />
      <Card
        style={{ height: '900px', width: '900px' }}
        link=' https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_18_mkw_sHPVHrkzE-dc&mrntrk=pcrid_386559717075_slid__pgrid_82649959887_pgeo_1007743_x__ptid_kwd-816922922808'
        imgSrc={image}
        sname='BHASKAR'
        date=''
      />
      <Card
        imgSrc="https://wallpapercave.com/wp/wp2497187.jpg"
        imgSrc='https://c4.wallpaperflare.com/wallpaper/572/47/710/zipper-ragnarok-lightning-warrior-gladiator-hd-wallpaper-thumb.jpg'
        title=' A Netflix Original Series'
        sname='THOR'
        link='https://www.netflix.com/in/title/80990668?source=35'
      />
      <Card
        imgSrc='https://www.wallpapertip.com/wmimgs/84-843938_full-hd-1080p-iron-man.jpg'
        
        title=' A Netflix Original Series'
        sname='IRON MAN'
        link='https://www.netflix.com/in/title/80990668?source=35'
      />
    </div>
  );
};

export default App;
