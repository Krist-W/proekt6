import { differenceInDays, format } from 'date-fns'
import differenceInCalendarDays from 'date-fns/fp/differenceInCalendarDays/index.js'
import { ru } from 'date-fns/locale'

async function loadTours() {

    const response = await fetch('https://www.bit-by-bit.ru/api/student-projects/tours')
    const date = await response.json()
    console.log(date)
    return date
}



function renderTours(tours) {
    document.getElementById("container").innerHTML = "" 
    tours.forEach(tour => { 
        const city = checkCity(tour)
        const duration = differenceInDays(new Date(tour.endTime), new Date(tour.startTime))
        const pattern = "dd MMMM"
        const option = {
            locale: ru,
        }
        document.getElementById("container").innerHTML += `
        
        <div class="bg-white shadow-lg rounded-lg overflow-hidden relative m-5 h-[42rem] grid lg:h-60 md:h-72 md:grid-cols-2 sm:grid-cols-1"> 
    
        <img class="h-full bg-cover bg-center" src="${tour.image}"</>
        <span class="m-5">
        <div class="flex font-medium text-xl">${tour.hotelName}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-600 ml-2 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg> ${tour.rating}</div>
          <p class="text-yellow-600 font-medium text-base hover:underline">${tour.country}, ${city}</p>
          <br> 
          <div class="flex">${format(new Date(tour.startTime), pattern, option)} - ${format(new Date(tour.endTime), pattern, option)},
          ${duration} дн.</div>
          <br> 
          <p class="flex justify-end gap-4 text-yellow-600 font-medium text-xl">${tour.price} руб.</p>
          <div class="absolute bottom-0"><button class="btn m-2 center">Подробнее</button><button class="btn">Избранное</button></div>
          
    
       </div>
       </span>
       `
    })

}

function checkCity(tour) {
    if (tour.city === null || tour.city === undefined) {
        return ""
    } else {
        return tour.city
}
}

async function init() {
    const tours = await loadTours()
    renderTours(tours)

}



init()


      {/* 
       





       
          <div class=">
            <p class="">
              Для всей семьи
            </p>
            <p class="font-semibold mt-3 text-xl">Мистический Петербург</p>
          </div>
          <div class="mt-2 ml-5">
          <div class="mt-3 mb-2 text-gray-500 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span class="ml-1">10 км</span>
            <span aria-hidden="true" class="mx-2">&middot;</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-1">170 мин</span> 
          </div>
          <button class="btn">Подробнее</button></div>
        </div>
      </div> */}
       
 