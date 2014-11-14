<?php

class SentryUserGroupSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('users_groups')->delete();

		$userUser = Sentry::getUserProvider()->findByLogin('user@skywebplus.net');
		$companyUser = Sentry::getUserProvider()->findByLogin('company@skywebplus.net');
		$adminUser = Sentry::getUserProvider()->findByLogin('rolando@skywebplus.net');

		$userGroup = Sentry::getGroupProvider()->findByName('Users');
		$companyGroup = Sentry::getGroupProvider()->findByName('Companies');
		$adminGroup = Sentry::getGroupProvider()->findByName('Admins');

	    // Assign the groups to the users
	    $userUser->addGroup($userGroup);
	    $companyUser->addGroup($companyGroup);
	    $adminUser->addGroup($adminGroup);
	}

}