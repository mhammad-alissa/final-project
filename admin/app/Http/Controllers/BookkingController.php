<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Bookking;
use App\Http\Requests\StoreBookkingRequest;
use App\Http\Requests\UpdateBookkingRequest;

class BookkingController extends Controller
{

    public function index()
    {
        $book = Bookking::all();
        return view("booking.book", compact("book"));
    }


    public function create()
    {
        //
    }

    public function store(StoreBookkingRequest $request)
    {
        //
    }


    public function show(Bookking $bookking)
    {
        //
    }


    public function edit(Bookking $bookking)
    {
        //
    }


    public function update(UpdateBookkingRequest $request, Bookking $bookking)
    {
        //
    }


    public function destroy( $bookking)
    {
        Bookking::where('id',$bookking)->delete();

        return redirect('booking')->with('success','تم حذف الصنف بنجاح');
    }
}
