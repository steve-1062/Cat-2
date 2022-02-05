// Creat Cookie
const createCookies = () => {
    const key = document.getElementById("user").value
    const value = document.getElementById("email").value
 
      const value2 = document.getElementById("phone").value
    document.cookie = `${key}=${value}; expires=Thu, 10 feb 2022 00:00:00 UTC;  path=/` 
localStorage.setItem(value2,value);
window.location.href = "disxml.html";

}
