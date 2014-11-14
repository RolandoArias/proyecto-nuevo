<?php

class SentryUserSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users')->delete();

		Sentry::getUserProvider()->create(array(
	        'email'    => 'user@skywebplus.net',
	        'password' => '123',
	        'first_name' => 'Jonh',
	        'last_name' => 'Smith',
	        'activated' => 1,
	    ));

	    Sentry::getUserProvider()->create(array(
	        'email'    => 'company@skywebplus.net',
	        'password' => '123',
	        'first_name' => 'Restaurante',
	        'last_name' => 'El Amanecer',
	        'activated' => 1,
	    ));

		Sentry::getUserProvider()->create(array(
	        'email'    => 'rolando@skywebplus.net',
	        'password' => '123',
	        'first_name' => 'Rolando',
	        'last_name' => 'Arias',
	        'activated' => 1,
	    ));

	    
	}

}