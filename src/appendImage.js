import createIcon from './importImage';
import findElement from './findElement';

function appendIcon() {
  const news = createIcon().newsIcon;
  const video = createIcon().videoIcon;
  const photo = createIcon().photoIcon;
  const chat = createIcon().chatIcon;
  const iconList = [news, video, photo, chat];
  const divList = findElement().tabIconList;

  for (let i = 0; i < divList.length; i++) {
    divList[i].appendChild(iconList[i]);
  }
}

export default appendIcon;
