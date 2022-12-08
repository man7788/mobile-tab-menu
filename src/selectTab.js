import findElement from './findElement';

function clickTab() {
  const divList = findElement().tabDivList;
  divList.forEach((item) => {
    item.addEventListener('click', (e) => {
      let target = e.composedPath();
      target = target[target.length - 6];
      divList.forEach((grey) => {
        if (grey.innerText !== target.innerText) {
          setStyleGrey(grey);
        }
      });
      setStyleBlack(target);
    });
  });
}

function setStyleGrey(tab) {
  const tabDiv = tab;
  tabDiv.style.filter = 'invert(70%)';
}

function setStyleBlack(tab) {
  const tabDiv = tab;
  tabDiv.style.filter = 'invert(0)';
}

export default clickTab;
