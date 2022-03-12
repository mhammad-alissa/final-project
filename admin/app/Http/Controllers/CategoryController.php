<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        return view("category.category", compact("categories"));

    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {

        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'image'=>'required'
        ],
        [
            'name.required'=>'هذا الحقل مطلوب',
            'description.required'=>'هذا الحقل مطلوب',
            'image.required'=>'هذا الحقل مطلوب'
        ]
        );


        $image = 'IMG'.'-'.time().'.'.$request->image->extension();
        $request->image->move(public_path('black/img'),$image);
        Category::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'image'=>$image
        ]);
        $categories = Category::all();
        return view("category.category", compact("categories"));
    }


    public function show(Category $category)
    {
        //
    }


    public function edit($id)
    {
        $category=Category::where('id',$id)->first();
        return view("category.editCategory",compact("category"));
    }


    public function update(Request $request,$id)
    {
        $request->validate([
            'name'=>'required',
            'image'=>'required'
        ]);
        $image = 'IMG'.'-'.time().'.'.$request->image->extension();
        $request->image->move(public_path('black/img'),$image);
        Category::where('id',$id)->update([
            'name'=>$request->name,
            'description'=>$request->description,
            'image'=>$image
        ]);
        // $categories = Category::all();
        return redirect('category');
    }


    public function destroy($category)
    {
        Category::where('id',$category)->delete();

        return redirect('category')->with('success','تم حذف الصنف بنجاح');
    }
}
