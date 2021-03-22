<template>
    <main class="h-full overflow-y-auto">
        <div
            class="container px-6 mx-auto grid animate__animated animate__fadeInUpBig animate__slow"
        >
            <h2 class="my-6 text-2xl font-semibold text-gray-700 uppercase">
                Data Vendor
            </h2>

            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <!-- input btn -->
                <div class="col-start-1">
                    <div>
                        <button
                            @click="openModal"
                            class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                        >
                            Input Vendor
                        </button>
                    </div>
                </div>

                <!-- search bar & btn -->
                <div class="col-start-2 md:col-start-4">
                    <label class="block text-sm">
                        <div
                            class="relative text-gray-500 focus-within:text-red-600"
                        >
                            <input
                                class="block w-full pr-20 px-4 py-2 text-sm text-black shadow-md focus:border-red-400 focus:outline-none focus:shadow-outline-red"
                                placeholder="Cari Vendor"
                            />
                            <button
                                class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-r-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line
                                        x1="21"
                                        y1="21"
                                        x2="16.65"
                                        y2="16.65"
                                    ></line>
                                </svg>
                            </button>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
                            >
                                <th class="px-4 py-3 text-center">#</th>
                                <th class="px-4 py-3 text-center">
                                    Nama Vendor
                                </th>
                                <th class="px-4 py-3 text-center">PIC</th>
                                <th class="px-4 py-3 text-center">
                                    Kontak PIC
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Telp Perusahaan
                                </th>
                                <th class="px-4 py-3 text-center">Website</th>
                                <th class="px-4 py-3 text-center">Brosur</th>
                                <th class="px-4 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            <tr
                                v-for="vendor in vendors"
                                :key="vendor.no"
                                class="text-gray-700"
                            >
                                <td :class="dataclass">
                                    <span class="font-semibold">
                                        {{ vendor.no }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-purple-500">
                                        {{ vendor.nama }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-orange-500">
                                        {{ vendor.pic }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    {{ vendor.kontak }}
                                </td>
                                <td :class="dataclass">
                                    {{ vendor.telp }}
                                </td>
                                <td :class="dataclass">
                                    <span
                                        class="font-semibold text-blue-500 hover:text-blue-700"
                                    >
                                        <a :href="vendor.website">
                                            {{ vendor.website }}
                                        </a>
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm text-center">
                                    <a
                                        target="_blank"
                                        :href="vendor.brosur"
                                        class="flex justify-center py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-white stroke-2 stroke-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"
                                            />
                                        </svg>
                                    </a>
                                </td>
                                <td class="px-4 py-3 text-sm text-center">
                                    <button
                                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
                                            ></path>
                                            <polygon
                                                points="18 2 22 6 12 16 8 16 8 12 18 2"
                                            ></polygon>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9"
                >
                    <span class="flex items-center col-span-3">
                        Showing 0-10 of 100
                    </span>
                    <span class="col-span-2"></span>
                    <!-- Pagination -->
                    <span
                        class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"
                    >
                        <nav aria-label="Table navigation">
                            <ul class="inline-flex items-center">
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-red"
                                        aria-label="Previous"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            class="w-4 h-4 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 text-white transition-colors duration-150 bg-red-600 border border-r-0 border-red-600 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        4
                                    </button>
                                </li>
                                <li>
                                    <span class="px-3 py-1">...</span>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        8
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-red"
                                    >
                                        9
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-red"
                                        aria-label="Next"
                                    >
                                        <svg
                                            class="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            dataclass: "px-4 py-3 text-sm text-center",
            vendors: [
                {
                    no: "1",
                    nama: "PT Trainer Indonesia",
                    pic: "dudel",
                    kontak: "+62 821-6666-0000",
                    telp: "021-1234567",
                    website: "https://trainer.co.id",
                    brosur:
                        "https://cdn.discordapp.com/attachments/647338577147199488/819404476770156554/763424111417622538.png",
                },
                {
                    no: "2",
                    nama: "PT Trainer Indonesia 2",
                    pic: "dudel 2",
                    kontak: "+62 821-6666-0000",
                    telp: "021-1234567",
                    website: "https://trainer2.co.id",
                    brosur:
                        "https://cdn.discordapp.com/attachments/647338577147199488/819404476770156554/763424111417622538.png",
                },
                {
                    no: "3",
                    nama: "PT Trainer Indonesia 3",
                    pic: "dudel 3",
                    kontak: "+62 821-6666-0000",
                    telp: "021-1234567",
                    website: "https://trainer3.co.id",
                    brosur:
                        "https://cdn.discordapp.com/attachments/647338577147199488/819404476770156554/763424111417622538.png",
                },
            ],
        }
    },
}
</script>
