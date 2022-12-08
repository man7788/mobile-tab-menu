import News from './image/newspaper-variant-outline.svg';
import Video from './image/youtube.svg';
import Photo from './image/image-multiple.svg';
import Chat from './image/forum.svg';

function createIcon() {
  const newsIcon = new Image();
  const videoIcon = new Image();
  const photoIcon = new Image();
  const chatIcon = new Image();

  newsIcon.src = News;
  videoIcon.src = Video;
  photoIcon.src = Photo;
  chatIcon.src = Chat;

  newsIcon.classList.add('tab-svg');
  videoIcon.classList.add('tab-svg');
  photoIcon.classList.add('tab-svg');
  chatIcon.classList.add('tab-svg');

  return { newsIcon, videoIcon, photoIcon, chatIcon };
}

export default createIcon;
