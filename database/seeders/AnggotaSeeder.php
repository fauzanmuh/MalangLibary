<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('anggota')->insert([
            'nim' => 1941720171,
            'user_id' => 2,
            'jurusan' => 'Teknologi Informasi',
            'tgl_lahir' => '2001-07-01',
            'no_hp' => '089531867319',
            'alamat' => 'Malang'
        ]);
    }
}
