<head>
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/withdrawal.css" />
</head>

@extends('name')

@section('title', 'Withdrawal' )

@section('content')
<section class="" id="withdrawal-section">
    <div class="container">
      <div class="row d-flex justify-content-center my-5">
        <form class="px-3 py-5 p-md-5" id="withdrawal-form">
          <div class="form-row">
            <div class="form-group col-12 pt-3">
              <label for="inputName1" class="required">Account Name:</label>
              <input type="text" class="form-control withdraw-form-control" id="inputName1" placeholder="Input Name">
            </div>
            <div class="form-group col-md-7 col-12">
              <label for="inputBank1" class="required">Bank Name</label>
              <input type="text" class="form-control withdraw-form-control" id="inputBank1"
                placeholder="Enter bank name">
            </div>
            <div class="form-group col-md-5 col-12">
              <label for="inputState" class="required">Account Type</label>
              <select id="inputState" class="form-control withdraw-form-control">
                <option selected class="">Select Bank Option</option>
                <option>Savings</option>
                <option>Current</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress" class="required">Amount</label>
            <div class="inner-btn">
              <input type="number" class="form-control withdraw-form-control" id="inputAddress"
                placeholder="Enter Amount">
              <button class="" type="submit" id="inner-btn-withdraw">Withdraw All</button>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress2" class="required">Account Number:</label>
            <input type="number" class="form-control withdraw-form-control" id="inputAddress2"
              placeholder="Enter Card Number">
          </div>

          <div class="form-group text-center mt-5 mb-1">
            <button type="submit" class="btn btn-primary col-md-8" id="withdraw-now-btn">Withdraw Now</button>
          </div>
      </div>
      </form>
    </div>
    </div>
  </section>
@endsection