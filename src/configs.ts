import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
// import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
// import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
// import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
// import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
// import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
// import GalleryPhoto6 from './resources/Gallery_Photo_6.png';

import GalleryPhoto1 from './resources/img-1.jpg';
import GalleryPhoto2 from './resources/img-2.jpg';
import GalleryPhoto3 from './resources/img-3.jpg';
import GalleryPhoto4 from './resources/img-4.jpg';
import GalleryPhoto5 from './resources/img-5.jpg';
import GalleryPhoto6 from './resources/img-6.jpg';
import GalleryPhoto7 from './resources/img-7.jpg';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: 'Waiting for schedule',
  weddingLocation: 'Waiting for schedule',
  groom: {
    name: 'Duc Dao Xuan',
    bank: 'TPBANK',
    accountNumber: '03204129201',
    fatherName: 'Xuan Tuoi Dao',
    // fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Thi Anh Nguyen',
    // motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: 'Phuong Anh Le',
    bank: 'bank name',
    accountNumber: '○○은행 ***-***-******',
    fatherName: 'Van Hien Le',
    // fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Thi Thu Phuong Phung',
    // motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  bank: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
