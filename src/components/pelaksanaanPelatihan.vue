<template>
    <main class="h-full overflow-y-auto">
        <div
            class="container px-6 mx-auto grid animate__animated animate__fadeInUpBig animate__slow"
        >
            <h2
                class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 uppercase"
            >
                DASHBOARD APPROVAL DAN PEMANTAUAN PELAKSANAAN PELATIHAN | SDM
            </h2>

            <div class="flex flex-wrap gap-3 mb-5">
                <input
                    type="date"
                    class="flex items-center justify-between w-45 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
                />
                <input
                    type="date"
                    class="flex items-center justify-between w-45 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
                />
                <div class="flex items-center justify-between">
                    <button
                        class="flex items-center justify-between px-3 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red dark:bg-red-600"
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

            <!-- Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    #
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Nama
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    NPP
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Unit Kerja
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Jabatan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Penugasan Saat Ini
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Bidang
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Nama Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Waktu Pelaksanaan Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Perkiraan Biaya Pelatihan
                                </th>
                                <th
                                    class="px-4 py-3 text-center border dark:border-gray-600"
                                    colspan="2"
                                >
                                    Approval Atasan
                                </th>
                                <th
                                    class="px-4 py-3 text-center border dark:border-gray-600"
                                    colspan="2"
                                >
                                    Approval SDM
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Waktu Pelaksanaan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Vendor
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Lokasi Pelaksanaan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Biaya Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="2">
                                    Status Pelaksanaan
                                </th>
                            </tr>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th
                                    class="w-1/2 px-4 py-3 text-center border dark:border-gray-600"
                                >
                                    Ya
                                </th>
                                <th
                                    class="w-1/2 px-4 py-3 text-center border dark:border-gray-600"
                                >
                                    Tidak
                                </th>
                                <th
                                    class="w-1/2 px-4 py-3 text-center border dark:border-gray-600"
                                >
                                    Ya
                                </th>
                                <th
                                    class="w-1/2 px-4 py-3 text-center border dark:border-gray-600"
                                >
                                    Tidak
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
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 1
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 2
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 2
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                3
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 3
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 3
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                4
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 4
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 4
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                5
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 5
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 5
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                6
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 6
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 6
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                7
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 7
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 7
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                8
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 8
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 8
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                9
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 9
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 9
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

                                <td class="px-4 py-3 text-sm text-center"></td>
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
                                                10
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <!-- nama -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Applestore Tester 10
                                </td>
                                <!-- npp -->
                                <td class="px-4 py-3 text-sm text-center">
                                    applestore 10
                                </td>
                                <!-- unit kerja -->
                                <td class="px-4 py-3 text-sm text-center">
                                    Bagian Test
                                </td>
                                <!-- jabatan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-red-500"
                                    >
                                        Staff Test
                                    </span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 text-center"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 px-1 py-1 ml-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </td>
                                <!-- total score -->
                                <td class="px-4 py-3 text-sm text-center"></td>
                                <!-- keterangan -->
                                <td class="px-4 py-3 text-sm text-center">
                                    <span
                                        class="px-2 py-1 font-semibold text-purple-500"
                                    >
                                        PT Trainer Indonesia 2
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    Testing Nama Pelatihan 1
                                </td>

                                <td class="px-4 py-3 text-sm text-center">
                                    5,000,001
                                </td>

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
