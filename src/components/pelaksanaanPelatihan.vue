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
                    class="flex items-center justify-between w-28 md:w-44 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
                />
                <input
                    type="date"
                    class="flex items-center justify-between w-28 md:w-44 px-4 py-3 bg-white shadow-md dark:bg-white text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red"
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
                            <tr
                                v-for="pel in pelatihan"
                                :key="pel.no"
                                class="text-gray-700 dark:text-gray-400"
                            >
                                <td :class="dataclass">
                                    <span class="font-semibold">
                                        {{ pel.no }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    {{ pel.nama }}
                                </td>
                                <td :class="dataclass">
                                    {{ pel.npp }}
                                </td>
                                <td :class="dataclass">
                                    {{ pel.unit }}
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-red-500">
                                        {{ pel.jabatan }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    {{ pel.penugasan }}
                                </td>
                                <td :class="dataclass">
                                    {{ pel.bidang }}
                                </td>
                                <td :class="dataclass">
                                    {{ pel.namapelatihan }}
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-orange-500">
                                        {{ pel.waktu }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-blue-500">
                                        {{ pel.biaya }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        :class="{
                                            atasanya: pel.isAtasan,
                                            atasantolak: !pel.isAtasan,
                                        }"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>
                                <td :class="dataclass">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        :class="{
                                            atasantolak: pel.isAtasan,
                                            atasantidak: !pel.isAtasan,
                                        }"
                                        viewBox="0 0 24 24"
                                        fill="none"
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
                                <td :class="dataclass">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        :class="{
                                            sdmya: pel.isSdm,
                                            sdmtolak: !pel.isSdm,
                                        }"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline
                                            points="20 6 9 17 4 12"
                                        ></polyline>
                                    </svg>
                                </td>
                                <td :class="dataclass">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        :class="{
                                            sdmtolak: pel.isSdm,
                                            sdmtidak: !pel.isSdm,
                                        }"
                                        viewBox="0 0 24 24"
                                        fill="none"
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
                                <td :class="dataclass">
                                    {{ pel.waktu }}
                                </td>
                                <td :class="dataclass">
                                    <span class="font-semibold text-purple-500">
                                        {{ pel.vendor }}
                                    </span>
                                </td>
                                <td :class="dataclass">
                                    {{ pel.lokasi }}
                                </td>
                                <td :class="dataclass">
                                    {{ pel.biayaFinal }}
                                </td>
                                <td :class="dataclass">
                                    <span
                                        :class="{
                                            true: pel.isStatus,
                                            false: !pel.isStatus,
                                        }"
                                    >
                                        {{ pel.status }}
                                    </span>
                                </td>
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

<script>
export default {
    data() {
        return {
            dataclass: "px-4 py-3 text-sm text-center",
            pelatihan: [
                {
                    no: "1",
                    nama: "Applestore Tester",
                    npp: "applestore",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 1",
                    waktu: "1 Jan 2020",
                    biaya: "5,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 1",
                    lokasi: "Testing Lokasi 1",
                    biayaFinal: "5,000,000",
                    status: "Realisasi",
                    isStatus: true,
                },
                {
                    no: "2",
                    nama: "Applestore Tester 2",
                    npp: "applestore2",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 2",
                    waktu: "2 Jan 2020",
                    biaya: "4,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 2",
                    lokasi: "Testing Lokasi 2",
                    biayaFinal: "5,000,000",
                    status: "Rencana",
                    isStatus: false,
                },
                {
                    no: "3",
                    nama: "Applestore Tester 3",
                    npp: "applestore3",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 3",
                    waktu: "3 Jan 2020",
                    biaya: "8,000,000",
                    isAtasan: false,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 3",
                    lokasi: "Testing Lokasi 3",
                    biayaFinal: "8,500,000",
                    status: "Rencana",
                    isStatus: false,
                },
                {
                    no: "4",
                    nama: "Applestore Tester 4",
                    npp: "applestore4",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 4",
                    waktu: "4 Jan 2020",
                    biaya: "5,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 4",
                    lokasi: "Testing Lokasi 4",
                    biayaFinal: "7,000,000",
                    status: "Realisasi",
                    isStatus: true,
                },
                {
                    no: "5",
                    nama: "Applestore Tester 5",
                    npp: "applestore5",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 5",
                    waktu: "5 Jan 2020",
                    biaya: "1,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 5",
                    lokasi: "Testing Lokasi 5",
                    biayaFinal: "3,000,000",
                    status: "Rencana",
                    isStatus: false,
                },
                {
                    no: "6",
                    nama: "Applestore Tester 6",
                    npp: "applestore6",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 6",
                    waktu: "6 Jan 2020",
                    biaya: "12,000,000",
                    isAtasan: false,
                    isSdm: false,
                    vendor: "PT Trainer Indonesia 6",
                    lokasi: "Testing Lokasi 6",
                    biayaFinal: "10,000,000",
                    status: "Rencana",
                    isStatus: false,
                },
                {
                    no: "7",
                    nama: "Applestore Tester 7",
                    npp: "applestore7",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 7",
                    waktu: "7 Jan 2020",
                    biaya: "5,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 7",
                    lokasi: "Testing Lokasi 7",
                    biayaFinal: "5,000,000",
                    status: "Realisasi",
                    isStatus: true,
                },
                {
                    no: "8",
                    nama: "Applestore Tester 8",
                    npp: "applestore8",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 8",
                    waktu: "8 Jan 2020",
                    biaya: "35,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 8",
                    lokasi: "Testing Lokasi 8",
                    biayaFinal: "45,000,000",
                    status: "Realisasi",
                    isStatus: true,
                },
                {
                    no: "9",
                    nama: "Applestore Tester 9",
                    npp: "applestore9",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 9",
                    waktu: "9 Jan 2020",
                    biaya: "7,000,000",
                    isAtasan: true,
                    isSdm: true,
                    vendor: "PT Trainer Indonesia 9",
                    lokasi: "Testing Lokasi 9",
                    biayaFinal: "5,830,000",
                    status: "Realisasi",
                    isStatus: true,
                },
                {
                    no: "10",
                    nama: "Applestore Tester 10",
                    npp: "applestore10",
                    unit: "Bagian Test",
                    jabatan: "Staff Test",
                    penugasan: "Kantor Test",
                    bidang: "Tester",
                    namapelatihan: "Testing Nama Pelatihan 10",
                    waktu: "10 Jan 2020",
                    biaya: "55,000,000",
                    isAtasan: true,
                    isSdm: false,
                    vendor: "PT Trainer Indonesia 10",
                    lokasi: "Testing Lokasi 10",
                    biayaFinal: "40,000,000",
                    status: "Realisasi",
                    isStatus: true,
                },
            ],
        }
    },
}
</script>

<style scoped>
.true {
    @apply px-2;
    @apply py-1;
    @apply font-semibold;
    @apply leading-tight;
    @apply text-green-700;
    @apply bg-green-100;
    @apply rounded-full;
}

.false {
    @apply px-2;
    @apply py-1;
    @apply font-semibold;
    @apply leading-tight;
    @apply text-blue-700;
    @apply bg-blue-100;
    @apply rounded-full;
}

.atasanya {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply stroke-2;
    @apply stroke-current;
    @apply text-green-700;
    @apply bg-green-100;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}

.atasantolak {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}

.atasantidak {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply stroke-2;
    @apply stroke-current;
    @apply text-red-700;
    @apply bg-red-100;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}

.sdmya {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply stroke-2;
    @apply stroke-current;
    @apply text-green-700;
    @apply bg-green-100;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}

.sdmtolak {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}

.sdmtidak {
    @apply h-6;
    @apply w-6;
    @apply px-1;
    @apply py-1;
    @apply ml-2;
    @apply stroke-2;
    @apply stroke-current;
    @apply text-red-700;
    @apply bg-red-100;
    @apply font-semibold;
    @apply leading-tight;
    @apply rounded-full;
    @apply text-center;
}
</style>
