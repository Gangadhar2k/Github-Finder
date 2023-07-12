const input = document.querySelector("#inputTxt");

// instating the class
const gitTest = new Github();
const ui = new UI();

// geting user details dynamicaly
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inValue = input.value;

  if (inValue === "") {
    alert("enter user name");
  } else {
    gitTest.getUser(inValue).then((data) => {
      ui.showUi(data.resData);
    });
  }
});
