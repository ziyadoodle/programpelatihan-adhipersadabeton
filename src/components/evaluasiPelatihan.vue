<template>
    <main class="h-full overflow-y-auto">
        <div
            class="container px-6 mx-auto grid animate__animated animate__fadeInUpBig animate__slow"
        >
            <h2
                class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 uppercase"
            >
                DASHBOARD EVALUASI PELATIHAN | SDM
            </h2>

            <!-- New Table -->
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap table-auto">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    #
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Nama
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    NPP
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Unit Kerja
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Jabatan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Penugasan Saat Ini
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    GAP Kompetensi
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Kategori Hard Skill
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Kategori Technical Skill
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Jenis Pengembangan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Masa Berlaku Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Jenis Sertifikasi
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Masa Berlaku Sertifikasi
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Bidang
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Nama Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Waktu Pelaksanaan Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Vendor
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Lokasi Pelaksanaan Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Masa Berlaku Sertifikasi Pelatihan
                                </th>
                                <th class="px-4 py-3 text-center" rowspan="3">
                                    Biaya Pelatihan
                                </th>
                                <th
                                    class="px-4 py-3 text-center border text-red-500"
                                    colspan="17"
                                >
                                    Evaluasi Pelatihan
                                </th>
                            </tr>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th
                                    class="px-4 py-3 text-center border text-indigo-500"
                                    colspan="6"
                                >
                                    Instruktur Pelatihan
                                </th>
                                <th
                                    class="px-4 py-3 text-center border text-green-500"
                                    colspan="6"
                                >
                                    Materi dan Metode Pelatihan
                                </th>
                                <th
                                    class="px-4 py-3 text-center border max-w-xs"
                                    rowspan="2"
                                >
                                    Saran
                                </th>
                                <th
                                    class="px-4 py-3 text-center border"
                                    colspan="6"
                                >
                                    Manfaat Pelatihan Terhadap Pekerjaan
                                </th>
                            </tr>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                                <th class="px-4 py-3 text-center border">
                                    Instruktur menguasai materi pelatihan
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Instruktur memberikan best practice yang
                                    revelan dan aplikatif
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Instruktur menyampaikan materi secara
                                    efektif
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Instruktur mampu membangun komunikasi yang
                                    interaktif
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Instruktur menggunakan metode pengajaran
                                    yang tepat
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Instruktur mengelola waktu pelatihan secara
                                    efektif sesuai dengan tujuan pelatihan
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Tujuan pelatihan dapat dipahami dengan jelas
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Materi pelatihan sesuai dengan tujuan
                                    pelatihan
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Materi mudah dipahami
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Metode pelatihan membantu memahami materi
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Materi membantu dalam melaksanakan pekerjaan
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Materi menarik dan menantang
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Manfaat 1
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Manfaat 2
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Manfaat 3
                                </th>
                                <th class="px-4 py-3 text-center border">
                                    Manfaat 4
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                        >
                            <!-- <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 md:block">
                          <p class="font-semibold w-full h-full text-center">1</p>
                        </div>
                      </div>
                    </td>
                  </tr> -->
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>

                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    2
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    3
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    4
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    5
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    6
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    7
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    8
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    9
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                            </tr>
                            <tr class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-5 text-center">
                                    10
                                </td>
                                <td class="px-4 py-5 text-center">
                                    applestore
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Apple Store Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Unit Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Staff Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Kantor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    GAP Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Hard Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Technical Skill Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Pengembangan Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Sertifikasi Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Bidang Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Nama Pelatihan Tester 1
                                </td>
                                <td class="px-4 py-5 text-center">
                                    01 Jan 2020
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Vendor Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lokasi Pelaksanaan Tester
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Masa Berlaku Test
                                </td>
                                <td class="px-4 py-5 text-center">
                                    1,000,000
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Setuju
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet, accusamus?
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
                                </td>
                                <td class="px-4 py-5 text-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing.
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
