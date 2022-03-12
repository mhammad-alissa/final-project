<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/addCategory', function () {
    return view('category.addCategory');
});

Route::resource('/category', 'CategoryController');


// Route::get('/category', [CategoryController::class, 'index']);


Route::resource('/product', 'ProductController');
Route::get('/addProduct', function () {
    return view('product.addProduct');
});
// Route::get('/product', function () {
//     return view('product');
// });

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



