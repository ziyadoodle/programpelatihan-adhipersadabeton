<template>
    <main class="h-full overflow-y-auto ">
        <div
            class="container px-6 mx-auto grid animate__animated animate__fadeInUpBig animate__slow"
        >
            <h2
                class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 uppercase"
            >
                Data Training
            </h2>

            <div class="flex justify-between w-full items-center">
                <!-- input btn -->
                <div class="">
                    <div>
                        <router-link
                            to="/add-training"
                            class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red dark:bg-red-600"
                        >
                            Input Training
                        </router-link>
                    </div>
                </div>

                <!-- search bar & btn -->
                <div class="flex items-center gap-3">
                    <input
                        class="text-sm py-3 px-4 shadow-md rounded-lg text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red dark:focus:shadow-outline-gray form-input"
                        placeholder="Cari Training"
                    />
                    <input
                        type="date"
                        class="w-45 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg active:bg-red-600 focus:outline-none focus:shadow-outline-red"
                    />
                    <input
                        type="date"
                        class="w-45 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg active:bg-red-600 focus:outline-none focus:shadow-outline-red"
                    />
                    <button
                        class="px-3 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red dark:bg-red-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs mt-10">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th class="px-4 py-3 text-center">#</th>
                                <th class="px-4 py-3 text-center">Tanggal</th>
                                <th class="px-4 py-3 text-center">
                                    Nama Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center">Vendor</th>
                                <th class="px-4 py-3 text-center">
                                    Lokasi Pelaksanaan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Jumlah Peserta
                                </th>
                                <th class="px-4 py-3 text-center">Status</th>
                                <th class="px-4 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                        >
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                    <div class="flex items-center text-sm">
                                        <!-- number -->
                                        <div
                                            class="relative hidden w-8 h-8 mr-3 md:block"
                                        >
                                            <p
                                                class="font-semibold w-full h-full text-center"
                                            >
                                                1
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- tanggal -->
                                <td class="px-4 py-3 text-sm text-center">
                                    14 October 2020
                                </td>
                                <!-- nama pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>
                                <!-- vendor -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 1
                                    </span>
                                </td>
                                <!-- Lokasi Pelaksanaan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>
                                <!-- jumlah peserta -->
                                <td class="px-4 py-3 text-sm text-center">
                                    0
                                </td>
                                <!-- status -->
                                <td class="px-4 py-3 text-xs text-center">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                    >
                                        Realisasi
                                    </span>
                                </td>
                                <!-- aksi -->
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

                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                    <div class="flex items-center text-sm">
                                        <!-- number -->
                                        <div
                                            class="relative hidden w-8 h-8 mr-3 md:block"
                                        >
                                            <p
                                                class="font-semibold w-full h-full text-center"
                                            >
                                                2
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- tanggal -->
                                <td class="px-4 py-3 text-sm text-center">
                                    14 October 2020
                                </td>
                                <!-- nama pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 2
                                </td>
                                <!-- vendor -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>
                                <!-- Lokasi Pelaksanaan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 2
                                </td>
                                <!-- jumlah peserta -->
                                <td class="px-4 py-3 text-sm text-center">
                                    0
                                </td>
                                <!-- status -->
                                <td class="px-4 py-3 text-xs text-center">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100"
                                    >
                                        Rencana
                                    </span>
                                </td>
                                <!-- aksi -->
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
                    class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
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
export default {}
</script>

<style scoped></style>
