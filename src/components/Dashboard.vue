<template>
    <main class="h-full overflow-y-auto">
        <div
            class="container px-6 mx-auto grid animate__animated animate__fadeInUpBig animate__slow"
        >
            <h2
                class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 uppercase"
            >
                DASHBOARD SUMMARY PELAKSANAAN PELATIHAN | SDM
            </h2>

            <div class="flex flex-wrap gap-3 mb-5">
                <input
                    type="date"
                    class="flex items-center justify-between w-28 md:w-44 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
                />
                <input
                    type="date"
                    class="flex items-center justify-between w-28 md:w-44 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
                />
                <div class="flex items-center justify-between">
                    <button
                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red dark:bg-red-600"
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

            <!-- Cards -->
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <!-- Card -->
                <div
                    class="flex items-center p-4 bg-white rounded-lg shadow-xs border-solid border-2 border-orange-400 dark:bg-gray-800 transform transition duration-500 hover:scale-110"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-orange-500 dark:text-orange-400"
                        >
                            Pelatihan Soft Skill
                        </p>
                        <p
                            class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                        >
                            0 Pelatihan
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="flex items-center p-4 bg-white rounded-lg shadow-xs border-solid border-2 border-blue-400 dark:bg-gray-800 transform transition duration-500 hover:scale-110"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-blue-500 dark:text-blue-400"
                        >
                            Pelatihan Teknik
                        </p>
                        <p
                            class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                        >
                            0 Pelatihan
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="flex items-center p-4 bg-white rounded-lg shadow-xs border-solid border-2 border-green-400 dark:bg-gray-800 transform transition duration-500 hover:scale-110"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-green-500 dark:text-green-400"
                        >
                            Pelatihan Non Teknik
                        </p>
                        <p
                            class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                        >
                            0 Pelatihan
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="flex items-center p-4 bg-white rounded-lg shadow-xs border-solid border-2 border-purple-500 dark:bg-gray-800 transform transition duration-500 hover:scale-110"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400"
                        >
                            Pelatihan General Skill
                        </p>
                        <p
                            class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                        >
                            0 Pelatihan
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-6">
                <!-- Card -->
                <div
                    class="flex items-center p-4 rounded-lg shadow-xs dark:bg-green-700 bg-green-400 col-span-2"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            ANGGARAN PELATIHAN YANG DIRENCANAKAN
                        </p>

                        <p
                            class="text-xl font-semibold text-green-800 dark:text-white"
                        >
                            Rp. 000,000,000
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center p-4 rounded-lg shadow-xs dark:bg-indigo-700 bg-indigo-500 col-span-2"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            TOTAL ANGGARAN PELATIHAN YANG TEREALISASI
                        </p>

                        <p
                            class="text-xl font-semibold text-indigo-900 dark:text-white"
                        >
                            Rp. 000,000,000
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center p-4 rounded-lg shadow-xs dark:bg-blue-700 bg-blue-500 col-span-2"
                >
                    <div>
                        <p
                            class="mb-2 text-sm font-medium text-white dark:text-white"
                        >
                            SISA ANGGARAN PELATIHAN
                        </p>

                        <p
                            class="text-xl font-semibold text-blue-900 dark:text-white"
                        >
                            Rp. 000,000,000
                        </p>
                    </div>
                </div>
            </div>

            <!-- New Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th class="px-4 py-3 text-center">
                                    #
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Nama
                                </th>
                                <th class="px-4 py-3 text-center">
                                    NPP
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Unit Kerja
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Jabatan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Penugasan Saat Ini
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Bidang
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Nama Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Waktu Pelaksanaan Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Lokasi Pelaksanaan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Biaya Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Status Pelaksanaan
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Total Score
                                </th>
                                <th class="px-4 py-3 text-center">
                                    Keterangan
                                </th>
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
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td
                                    class="px-4 py-3 text-sm text-center font-semibold text-red-500"
                                >
                                    Staff Test
                                </td>
                                <!-- penugasan saat ini -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Kantor Test
                                </td>
                                <!-- bidang -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- nama pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Testing nama pelatihan 1
                                </td>
                                <!-- waktu pelaksanaan pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-orange-500"
                                    >
                                        14/10/2020
                                    </span>
                                </td>
                                <!-- lokasi pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    testing nama pelatihan 1
                                </td>
                                <!-- biaya pelatihan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-blue-500"
                                    >
                                        5,000,001
                                    </span>
                                </td>
                                <!-- status pelaksanaan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                    >
                                        true
                                    </span>
                                    <span
                                        class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                    >
                                        false
                                    </span>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                >
                    <span class="flex items-center col-span-3">
                        Showing 1-10 of 100
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
