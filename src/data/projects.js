import {
  FORESTAGE_WEB,
  FORESTAGE_APP,
  BACKSTAGE,
} from '../share/project.js';

import geesaa from '../media/img/geesaa_logo.png';
import eatme from '../media/img/eatme_logo.jpg';
import uno from '../media/img/uno_logo.png';
import ccumis from '../media/img/ccu_mis_logo.png';
import geesaa_1 from '../media/img/geesaa_1.PNG';
import geesaa_2 from '../media/img/geesaa_2.PNG';
import geesaa_3 from '../media/img/geesaa_3.PNG';
import geesaa_4 from '../media/img/geesaa_4.PNG';
import geesaa_5 from '../media/img/geesaa_5.jpg';
import geesaa_6 from '../media/img/geesaa_6.jpg';
import geesaa_7 from '../media/img/geesaa_7.jpg';
import geesaa_8 from '../media/img/geesaa_8.jpg';

export default [{
  id: 1,
  title: 'GEESAA',
  subtitle: '智慧手沖咖啡壺 App',
  cover: geesaa,
  media: [{
    type: 'PHOTO',
    url: geesaa_1,
  }, {
    type: 'PHOTO',
    url: geesaa_8,
  }, {
    type: 'PHOTO',
    url: geesaa_2,
  }, {
    type: 'PHOTO',
    url: geesaa_3,
  }, {
    type: 'PHOTO',
    url: geesaa_5,
  }, {
    type: 'PHOTO',
    url: geesaa_6,
  }, {
    type: 'PHOTO',
    url: geesaa_7,
  }, {
    type: 'PHOTO',
    url: geesaa_4,
  }],
  types: [FORESTAGE_APP],
  description: '透過雲端傳送專業咖啡師的配方，將手沖的溫度及風味帶回家。\n在這項專案中，使用 ReactNative 及相關開源專案來進行開發，其中運用 RN Animations 與使用者互動時，讓畫面更直覺、舒適。並與同事、第三方軟硬體合作，傳送配方、接收咖啡機回應，並結合開源專案介接 itunes 音樂、選擇手機中的音樂，讓人在沖泡咖啡的過程中更融入氛圍。',
  tags: [
    'ReactNative',
    'Apollo',
    'Redux',
    'ReduxForm',
    'iTunes',
    'facebook login',
  ],
  websiteLink: null,
  appLink: null,
  relatedLink: 'http://www.geesaa.com.tw/',
  year: '2018',
}, {
  id: 2,
  title: 'EatMe 一粒米',
  subtitle: '美食優惠之後台',
  cover: eatme,
  types: [BACKSTAGE],
  description: '「EatMe 一粒米」 是一個美食優惠平台 App，使用者可利用地圖尋找特定種類、價位的餐廳，並查看菜單及優惠等資訊；觀看影片、掃描店家或網紅專屬的 QR Code 獲取點數，以換取店家優惠。\n在後台製作，與設計師討論，並運用 React、ReduxForm、GoogleMap Geocoding API，製作更符合需求的表單元件，簡化繁雜的上架過程；並透過 Apollo Cache 的機制，避免不必要的重複獲取資料，進而快速顯示大量的商家、會員、專題、廣告等資訊，必要時更新部分資訊。',
  tags: [
    'ReactJS',
    'Apollo',
    'Redux',
    'ReduxForm',
    'GoogleMap Geocoding API',
  ],
  websiteLink: null,
  appLink: null,
  relatedLink: 'https://itunes.apple.com/tw/app/%E4%B8%80%E7%B2%92%E7%B1%B3/id924934755?mt=8',
  year: '2018-2017',
}, {
  id: 3,
  title: 'uno',
  subtitle: '官方網站前後台',
  cover: uno,
  types: [FORESTAGE_WEB, BACKSTAGE],
  description: '此專案主要展示台達電 uno 室內環境品質監控產品的資訊及解決方案。前台主要負責依照原有架構將畫面做 RWD，並使用 react-i18next 來建立多語系。並建立後台，操作的介面主要由側邊推出修改欄位，修改時能直接預覽真實的畫面，方便查看是否需要修正圖片大小或文字長度。',
  tags: [
    'ReactJS',
    'react-i18next',
    'Apollo',
    'Redux',
    'ReduxForm',
  ],
  websiteLink: 'https://www.uno.deltaww.com/',
  appLink: null,
  relatedLink: null,
  year: '2017',
}, {
  id: 4,
  title: '中正大學資管系',
  subtitle: '系所官方網站',
  cover: ccumis,
  types: [FORESTAGE_WEB],
  description: '中正大學資訊管理學系系網。此專案與四位同學合作建立，其中主要負責前端畫面，嘗試使用 CSS & Javascript 在 hover 及 navigation 做互動效果，並接收後端的資料。',
  tags: [
    'Angular',
    'BootStrap',
    'MongoDB',
  ],
  websiteLink: 'https://www.mis.ccu.edu.tw/',
  appLink: null,
  relatedLink: null,
  year: '2016',
}];
