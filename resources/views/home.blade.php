@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
<div id="containerhome">
  <div class="col-md-8">
    <div class="card">
      <div class="card" style="width: 18rem;" class="companynamecard">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Company Bio</h5>
          <p class="card-text">Quick Cmpany Bio for Customers.</p>
          <a href="/addcompany" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Customer Package Selection</h5>
          <p class="card-text">This should be dynamic depends on how to show the dropdown</p>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Package 1</a>
              <a class="dropdown-item" href="#">Package 2</a>
              <a class="dropdown-item" href="#">package 3</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
@endsection
