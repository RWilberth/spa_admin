<?php

use Illuminate\Database\Seeder;

class ServiceCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	DB::table('service_categories')->insert([
            'description' =>  'Belleza',
            'code' =>  App\Enums\ServiceCategoryEnum::Beauty,
            'uuid'=>(string) Uuid::generate(4),
        ]);
    }
}
