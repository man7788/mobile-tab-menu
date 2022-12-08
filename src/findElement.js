function findElement() {
  const tabIconList = document.querySelectorAll('.tab-icon');
  const tabDivList = document.querySelectorAll('.tab-div');
  return { tabIconList, tabDivList };
}

export default findElement;
