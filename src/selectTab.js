import findElement from './findElement';

function clickTab() {
  const divList = findElement().tabDivList;
  divList.forEach((item) => {
    item.addEventListener('click', (e) => {
      let target = e.composedPath();
      target = target[target.length - 6];
      divList.forEach((nonTarget) => {
        setStyleGrey(nonTarget);
        setBarHidden(nonTarget.childNodes[5]);
      });
      setStyleBlack(target);
      setBarAppear(target.childNodes[5]);
    });
  });
}

function setStyleGrey(tab) {
  const tabDiv = tab;
  tabDiv.style.filter = 'invert(60%)';
}

function setStyleBlack(tab) {
  const tabDiv = tab;
  tabDiv.style.filter = 'invert(0)';
}

function setBarAppear(tab) {
  const tabDiv = tab;
  tabDiv.style.display = 'block';
}

function setBarHidden(tab) {
  const tabDiv = tab;
  tabDiv.style.display = 'none';
}

export default clickTab;
