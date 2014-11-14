<?php

class CompanyController extends \BaseController {


	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getHome()
	{
		return View::make('protected.company.company_dashboard');
	}



}