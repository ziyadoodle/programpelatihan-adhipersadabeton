<template>
    <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
            <h2
                class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 uppercase"
            >
                Input Training
            </h2>

            <!-- form -->
            <div
                class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
                <!-- pilih vendor -->
                <label class="block mt-4 text-sm">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                    >
                        Pilih <span class="text-red-600">Vendor</span>
                    </span>
                    <select
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    >
                        <option>Pilih Vendor</option>
                        <option>PT Trainer Indonesia</option>
                        <option>PT Trainer Indonesia 2</option>
                    </select>
                </label>

                <!-- nama pelatihan -->
                <label class="block text-sm mt-5">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                        >Nama <span class="text-red-600">Pelatihan</span></span
                    >
                    <input
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    />
                </label>

                <!-- tgl pelaksanaan -->
                <label class="block text-sm mt-5">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                        >Tgl <span class="text-red-600">Pelaksanaan</span></span
                    >
                    <div class="block space-x-4">
                        <input
                            type="date"
                            class="w-1/3 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                        />
                        <input
                            type="date"
                            class="w-1/3 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                        />
                    </div>
                </label>

                <!-- lokasi pelaksanaan -->
                <label class="block text-sm mt-5">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                        >Lokasi
                        <span class="text-red-600">Pelaksanaan</span></span
                    >
                    <input
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    />
                </label>

                <!-- masa berlaku sertifikat -->
                <label class="block text-sm mt-5">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                        >Masa
                        <span class="text-red-600">Berlaku</span>
                        Sertifikat</span
                    >
                    <input
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    />
                </label>

                <!-- biaya pelatihan -->
                <label class="block text-sm mt-5">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                        >Biaya
                        <span class="text-red-600">Pelaksanaan</span></span
                    >
                    <input
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    />
                </label>

                <!-- gap kompetensi -->
                <label class="block mt-4 text-sm">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                    >
                        Gap <span class="text-red-600">Kompetensi</span>
                    </span>
                    <select
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm form-select focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    >
                        <option>Soft Skill</option>
                        <option>Hard SKill</option>
                    </select>
                </label>

                <!-- kategori hard skill -->
                <label class="block mt-4 text-sm">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                    >
                        Kategori <span class="text-red-600">Hard</span> Skill
                    </span>
                    <select
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm form-select focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    >
                        <option>General Skill</option>
                        <option>Technical Skill</option>
                    </select>
                </label>

                <!-- kategori technical skill -->
                <label class="block mt-4 text-sm">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                    >
                        Kategori
                        <span class="text-red-600">Technical</span> Skill
                    </span>
                    <select
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm form-select focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    >
                        <option>Teknik</option>
                        <option>Non-Teknik</option>
                    </select>
                </label>

                <!-- jenis pengembangan -->
                <label class="block mt-4 text-sm">
                    <span
                        class="text-gray-700 dark:text-gray-400 text-base font-medium"
                    >
                        Jenis <span class="text-red-600">Pengembangan</span>
                    </span>
                    <select
                        class="block w-3/5 p-2 bg-gray-100 mt-1 text-sm form-select focus:ring-2 focus:ring-red-400 focus:outline-none focus:shadow-outline-red"
                    >
                        <option>Pelatihan</option>
                        <option>Kursus</option>
                        <option>Seminar</option>
                        <option>Workshop</option>
                        <option>Lokakarya</option>
                        <option>Konferensi</option>
                    </select>
                </label>

                <div class="mt-8">
                    <button
                        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                    >
                        Submit
                    </button>
                    <button
                        class="px-4 py-2 ml-4 text-sm font-medium leading-5 text-red-600 transition-colors duration-150 bg-none border border-red-600 rounded-lg active:bg-red-600 hover:text-white hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
