//DOM
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description')
const searchInput = document.querySelector('#search-input');
const formSearch = document.querySelector('#form-search');


function handleSearch(event) {
event.preventDefault();
    let searchString = searchInput.value;

    // Gửi yêu cầu lấy dữ liệu đến OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${apiKey}&lang=vi&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log.data
  })
  .catch(error => console.error("Lỗi fetch data:", error));

    console.log(searchString);
}
formSearch.addEventListener('submit', function(event){
    handleSearch(event)
})