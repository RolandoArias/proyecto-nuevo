@extends('protected.company.master')

@section('title', 'Company Dashboard')

@section('content')

	@if (Session::has('flash_message'))
			<p>{{ Session::get('flash_message') }}</p>
	@endif


	<div class="jumbotron">
		<h1>Company Page</h1>
		<p>This page is for Company only!</p>
	</div>


@stop