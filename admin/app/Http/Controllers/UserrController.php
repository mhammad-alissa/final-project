<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Userr;
use App\Http\Requests\StoreUserrRequest;
use App\Http\Requests\UpdateUserrRequest;

class UserrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Userr = Userr::all();
        return view("user.user", compact("Userr"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserrRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserrRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Userr  $userr
     * @return \Illuminate\Http\Response
     */
    public function show(Userr $userr)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Userr  $userr
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user=Userr::where('id',$id)->first();
        return view("user.edituser",compact("user"));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserrRequest  $request
     * @param  \App\Models\Userr  $userr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            'phone'=>'required',
            'image'=>'required'

        ]);
        $image = 'IMG'.'-'.time().'.'.$request->image->extension();
        $request->image->move(public_path('black/img'),$image);
        Userr::where('id',$id)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'phone'=>$request->phone,
            'image'=>$image


        ]);
        // $categories = Category::all();
        return redirect('userr');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Userr  $userr
     * @return \Illuminate\Http\Response
     */
    public function destroy($userr)
    {
        Userr::where('id',$userr)->delete();

        return redirect('userr')->with('success','تم حذف الصنف بنجاح');
    }
}
