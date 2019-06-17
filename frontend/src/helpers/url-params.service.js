const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const emp_no = urlParams.get('emp_no');
  const password = urlParams.get('password');

  return {emp_no,password}
}

export { getUrlParams }