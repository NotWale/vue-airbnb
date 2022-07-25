<template>
    <div class="md:grid block xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 lg:space-x-4 md:space-x-3">
        <li class="mt-8 flex flex-col text-left text-sm" v-for="item in locations" :key="item.id">
            <img class="h-42 sm:h-48 lg:h-72 w-full rounded-xl" :src="item.ImageURL" :alt="item.ImageALT" />        
            <p class="font-bold mt-2">{{item.Country}}</p>
            <p class="font-extralight text-gray-500">{{item.Kilometer}} kilometers away</p>
            <p class="font-extralight text-gray-500">{{item.Date}}</p>
        </li>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
    return {
      locations: [
        {
            id: 1,
            Country: "Badachro, UK",
            ImageURL: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "house on sea",
            Kilometer: "1,261",
            Date: "Nov 17 - 22"
        }, {
            id: 2,
            Country: "Nordland, Norway",
            ImageURL: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "Hexagon House",
            Kilometer: "2,028",
            Date: "May 1 - 6"
        },
        {
            id: 3,
            Country: "Sali, Croatia, Croatia",
            ImageURL: "https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "House",
            Kilometer: "854",
            Date: "Oct 6 - 13"
        },
        {
            id: 4,
            Country: "Gildeskal, Norway",
            ImageURL: "https://images.unsplash.com/photo-1585544314038-a0d3769d0193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "Sea House",
            Kilometer: "1,916",
            Date: "Aug 25 - 30"
        },
        {
            id: 5,
            Country: "Murter, Croatia",
            ImageURL: "https://images.unsplash.com/photo-1568941159284-3b299541ee63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "Just a house",
            Kilometer: "873",
            Date: "Oct 29 - Nov 5"
        },
        {
            id: 6,
            Country: "Vis, Croatia",
            ImageURL: "https://images.unsplash.com/photo-1570290870545-277c2f5ad465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "pic1",
            Kilometer: "971",
            Date: "Aug 26 - 31"
        },
        {
            id: 7,
            Country: "Opcina Lastovo, Croatia",
            ImageURL: "https://images.unsplash.com/photo-1602699905588-a6c9f58bad2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "pic2",
            Kilometer: "1,014",
            Date: "Sep 1 - 6"
        },
        {
            id: 8,
            Country: "Uusikaupunk, Finalnd",
            ImageURL: "https://images.unsplash.com/photo-1634663476205-812f96a5705b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "pic3",
            Kilometer: "1,425",
            Date: "Sep 4 - 9"
        },
        {
            id: 9,
            Country: "Gildeskal, Norway",
            ImageURL: "https://images.unsplash.com/photo-1589419896452-b460b8b390a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGFpcmJuYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            ImageALT: "pic4",
            Kilometer: "1,916",
            Date: "Aug 22 - 27"
        },
        {
            id: 10,
            Country: "Skalen, Sweden",
            ImageURL: "https://images.unsplash.com/photo-1612986450019-2365eb988374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxhaXJibmJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            ImageALT: "pic5",
            Kilometer: "1,146",
            Date: "Sep 19 - 24"
        }
      ],
    }
  },
}
</script>