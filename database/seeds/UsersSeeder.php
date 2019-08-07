<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	DB::table('users')->insert([
            'username' =>  'admin@spa.com',
            'password' =>  bcrypt('4dm1n'),
            'name'	   => 'Andrea Vargas',
            'uuid'=>(string) Uuid::generate(4),
        ]);
    }
}
