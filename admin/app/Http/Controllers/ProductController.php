<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{

    public function index()
    {
        $Products = Product::all();
        return view("product.product", compact("Products"));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'p_name'=>'required',
            'p_location'=>'required',
            'p_description'=>'required',
            'p_image'=>'required',
            'category_id'=>'required'

        ],
        [
            'p_name.required'=>'هذا الحقل مطلوب',
            'p_location.required'=>'هذا الحقل مطلوب',
            'p_description.required'=>'هذا الحقل مطلوب',
            'p_image.required'=>'هذا الحقل مطلوب',
            'category_id.required'=>'هذا الحقل مطلوب',
        ]
        );


        $p_image = 'IMG'.'-'.time().'.'.$request->p_image->extension();
        $request->p_image->move(public_path('black/img'),$p_image);

        $p_sup_image1 = 'IMG'.'-'.time().'.'.$request->p_sup_image1->extension();
        $request->p_sup_image1->move(public_path('black/img'),$p_sup_image1);

        $p_sup_image2 = 'IMG'.'-'.time().'.'.$request->p_sup_image2->extension();
        $request->p_sup_image2->move(public_path('black/img'),$p_sup_image2);
        Product::create([
            'p_name'=>$request->p_name,
            'p_location'=>$request->p_location,
            'p_description'=>$request->p_description,
            'p_image'=>$p_image,
            'p_sup_image1'=>$p_sup_image1,
            'p_sup_image2'=>$p_sup_image2,
            'category_id'=>$request->category_id
        ]);
        $Products  = Product::all();
        return view("product.product", compact("Products"));
    }

    public function show(Product $product)
    {
        //
    }

    public function edit($id)
    {
        $product=Product::where('id',$id)->first();
        return view("product.editProduct",compact("product"));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'p_name'=>'required',
            'p_location'=>'required',
            'p_description'=>'required',
            'p_image'=>'required',
            'category_id'=>'required'

        ],
        [
            'p_name.required'=>'هذا الحقل مطلوب',
            'p_location.required'=>'هذا الحقل مطلوب',
            'p_description.required'=>'هذا الحقل مطلوب',
            'p_image.required'=>'هذا الحقل مطلوب',
            'category_id.required'=>'هذا الحقل مطلوب',
        ]
        );
        $p_image = 'IMG'.'-'.time().'.'.$request->p_image->extension();
        $request->p_image->move(public_path('black/img'),$p_image);

        $p_sup_image1 = 'IMG'.'-'.time().'.'.$request->p_sup_image1->extension();
        $request->p_sup_image1->move(public_path('black/img'),$p_sup_image1);

        $p_sup_image2 = 'IMG'.'-'.time().'.'.$request->p_sup_image2->extension();
        $request->p_sup_image2->move(public_path('black/img'),$p_sup_image2);

        Product::where('id',$id)->update([
            'p_name'=>$request->p_name,
            'p_location'=>$request->p_location,
            'p_description'=>$request->p_description,
            'p_image'=>$p_image,
            'p_sup_image1'=>$p_sup_image1,
            'p_sup_image2'=>$p_sup_image2,
            'category_id'=>$request->category_id
        ]);
        // $categories = Category::all();
        return redirect('product');
    }

    public function destroy($product)
    {
        Product::where('id',$product)->delete();

        return redirect('product')->with('success','تم حذف الصنف بنجاح');
    }
}
