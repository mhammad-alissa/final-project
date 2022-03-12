@extends('layouts.master')
@section('content')

<div class="modal-dialog" role="document">
    <div class="modal-content" style="margin-top: 180px ; width:700px; ">
        <div class="modal-header">
            <h5 class="modal-title">Create Project</h5>
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="{{ route('product.store') }}" method="POST" autocomplete="off" enctype="multipart/form-data">
@csrf
                <div class="form-group">
                    <label class="text-black font-w500">Project Name</label>
                    <input name="p_name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">location</label>
                    <input name="p_location" type="text" class="form-control">
                </div>

                <div class="form-group">
                    <label class="text-black font-w500">description</label>
                    <input name="p_description" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">image</label>
                    <input name="p_image" type="file" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">image2</label>
                    <input name="p_sup_image1" type="file" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">image3</label>
                    <input name="p_sup_image2" type="file" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">id cat</label>
                    <input name="category_id" type="number" class="form-control">
                </div>
                {{-- <div class="form-group">
                    <label class="text-black font-w500">Deadline</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label class="text-black font-w500">Client Name</label>
                    <input type="text" class="form-control">
                </div> --}}
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">CREATE</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
